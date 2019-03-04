---
id: diviner
title: Getting a Diviner Environment setup
---

## System dependencies

This guided assumes the user has `Docker` already installed.

If the user is using Ubuntu 18.04, then this guide that Digital Ocean has created can be followed to get Docker installed. [Digital Ocean Docker Guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04).

Otherwise, please follow the appropriate installation instructions for your system. The docker setup guide can be found [here](https://docs.docker.com/install/)

## Project setup

Set project home

For example:

```sh
  # Set XYO_HOME to current directory
  export XYO_HOME=`pwd`/xyo && echo "XYO_HOME set to $XYO_HOME"
```

Create project folder and set XYO_HOME environment variable. Additionally create `archivist` and `diviner` folders

```sh
  mkdir -p $XYO_HOME && \
  cd $XYO_HOME && \
  mkdir archivist && \
  mkdir diviner
```

### Archivist

First, lets change directory to archivist folder and create some required folders

```sh
  cd $XYO_HOME/archivist && mkdir logs && mkdir archivist-db
```

Next, lets pick the credentials for the MySQL service. The ones specified below should not be used and only meant to serve as an example command. Instead pick a set of credentials that only you will know.

```sh
  export MYSQL_USER=admin && export MYSQL_PASSWORD=password
```

Start the MySQL service using docker.

```sh
  docker run \
    --name XyoDb \
    -d \
    -p 3306:3306 \
    -e MYSQL_USER=$MYSQL_USER \
    -e MYSQL_PASSWORD=$MYSQL_PASSWORD \
    -e MYSQL_DATABASE=Xyo \
    -e MYSQL_RANDOM_ROOT_PASSWORD=yes \
    mysql:5.7.24 --sql_mode=NO_ENGINE_SUBSTITUTION
```

After the MySQL service is available lets set up the archivist application.

Pick a name for your node

```sh
  export ARCHIVIST_NODE_NAME=my-archivist
```

Because determining the public ip address of a particular can vary drastically machine to machine, it won't be covered here. Suffice it is say, that if you want your archivist to be addressable by other nodes you will have to provided the ip address. For this exercises sake, we will the network address that will probably resolve to the nearest subnet this system belongs to.

```sh
export MY_IP=`ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'` && echo "My ip is $MY_IP"
```

Now, we can start the archivist application using docker.

```sh
  docker run \
    --name XyoArchivist \
    -d \
    -p 11000:11000 \
    -p 11001:11001 \
    -v `pwd`/logs:/workspace/logs \
    -v `pwd`/archivist-db:/workspace/archivist-db \
    -e NODE_NAME=$ARCHIVIST_NODE_NAME \
    -e IP_OVERRIDE=$MY_IP \
    -e SQL__HOST=`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' XyoDb` \
    -e SQL__USER=$MYSQL_USER \
    -e SQL__PASSWORD=$MYSQL_PASSWORD \
    -e SQL__DATABASE=Xyo \
    -e SQL__PORT=3306 \
    xyonetwork/app-archivist:latest
```

To view the archivist application logs

```sh
  docker logs --tail 500 XyoArchivist
```

We should see a number of SQL commands logs as well as some log messages about creating a genesis block and a graphql server being available.

If you have a browser available you can pull up the GraphQL dashboard at [http://localhost:11001/](http://localhost:11001/).

You now have a fully functioning archivist accepting bound witness connections on port 11000 and a public query API available on port 11001.

### Diviner

Let's change directory to the diviner folder.

```sh
  cd $XYO_HOME/diviner
```

The diviner has a service dependency on [IPFS](https://ipfs.io/). We'll satisfy that dependency using docker.

Lets create some IPFS directory and system dependencies.

```sh
  mkdir -p $XYO_HOME/diviner/ipfs/staging && \
  mkdir -p $XYO_HOME/diviner/ipfs/data && \
  export ipfs_staging=$XYO_HOME/diviner/ipfs/staging && \
  export ipfs_data=$XYO_HOME/diviner/ipfs/data
```

Then lets create the IPFS container

```sh
  docker run \
  -d \
  --name ipfs_host \
  -v $ipfs_staging:/export \
  -v $ipfs_data:/data/ipfs \
  -p 4001:4001 \
  -p 127.0.0.1:8080:8080 \
  -p 127.0.0.1:5001:5001 \
  ipfs/go-ipfs:latest
```

The diviner requires  the `XyoStakedConsensus.json` file to be in our IPFS node. Lets seed it.

```sh
  curl 'https://ipfs.io/ipfs/QmeFQ55jVbtuVoFYXJdZWKoWMjjs9DZ9teCQhrhTLofGP2' > $ipfs_staging/XyoStakedConsensus.json && \
  docker exec ipfs_host ipfs add -r /export/XyoStakedConsensus.json
```

Further instructions on how to control your ipfs node can be found [here](https://hub.docker.com/r/ipfs/go-ipfs/#docker-usage).

For the purpose of this guide, we will use ganache as our Ethereum rpc node provider.

```sh
  docker run \
  -d \
  --name EthNode \
  -p 8545:8545 \
  trufflesuite/ganache-cli:latest
```

Ganache will create a number test Ethereum accounts for us. We will assume the first one as the identity for the diviner

```sh
  export ABOUT__ETH_ADDRESS=`curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' 127.0.0.1:8545 | python -c "import sys, json; print json.load(sys.stdin)['result'][0]"` && echo "Diviner ethereum address is $ABOUT__ETH_ADDRESS"
```

Next lets deploy the PayOnDelivery smart contract. Because the smart-contract is unreadable byte-code and quite cumbersome to put in this guide we will load it remotely.

```sh
  export ETHEREUM_TRANSACTION_ID=`curl -s -o- https://gist.githubusercontent.com/ryanxyo/90223a2286c2bb3aa8ee025bd7368cf5/raw/bb50c3f9f792efaf79e7dd2259270462b3a4b28d/deployPayOnDelivery.sh | bash | python -c "import sys, json; print json.load(sys.stdin)['result']"` && echo "PayOnDelivery transaction id is $ETHEREUM_TRANSACTION_ID"
```

then

```sh
export ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS=`curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["'"$ETHEREUM_TRANSACTION_ID"'"],"id":2}' http://127.0.0.1:8545 | python -c "import sys, json; print json.load(sys.stdin)['result']['contractAddress']"` && echo "PayOnDelivery contract address is $ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS"
```

Now, that we have an IPFS service, a Web3 service and an archivist service available we can start the Diviner application.

```sh
docker run \
-d \
--name XyoDiviner \
-p 12000:12000 \
-e ABOUT__URL=$MY_IP \
-e ABOUT__SEEDS__ARCHIVISTS=`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' XyoArchivist`:11001 \
-e IPFS__HOST=`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ipfs_host` \
-e ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS=$ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS \
-e WEB3__HOST=http://`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' EthNode`:8545 \
xyonetwork/app-diviner
```

After the docker container is up and running lets take a look at the logs

```sh
  docker logs --tail 100 XyoDiviner
```

You should see a reoccurring log message saying something to the effect of:

`Web3QuestionService: No questions exist in smart contract`

This is to be expected. While we created the contract itself, no questions have been registered.