---
id: payable-demo
title: Archivist and Diviner Payable on Delivery Demo
---

# Getting Started with an XYO Diviner

###### This demo will allow you to complete an end-to-end conversation between an Archivist and Diviner to confirm a delivery and secure a payment. 

## What you will need

- Use nvm to run node in 10 LTS (currently 10.15.0), this is because the node installs will fail if using the system node.
- [ganache-ui](https://truffleframework.com/ganache)
- [sequel pro](https://sequelpro.com)
- [docker](https://www.docker.com/get-started)
- a browser running [metamask](https://metamask.io/)
- [ipfs](https://ipfs.io/)
- [dApploy](https://github.com/XYOracleNetwork/tool-dapploy-nodejs)
- [dApper](https://dapper.layerone.co/)

## Key Concepts that you should know before starting
- [Archivist](https://xyo.network/tech/) 
- [Diviner](https://xyo.network/tech/)
- [Proof of Origin Chain](https://xyo.network/tech/)

## Initial Setup

Make sure that you take notes for various hashes, and other data you will need to walkthrough this demo.

- Boot up new instance of ganache ui (using as an Ethereum RPC node provider), make sure port is set to 8545, cancel and restart if necessary. You can change that setting by clicking on the settings gear in the top right corner of the UI.
- Open up browser with metamask, switch to localhost 8545, import the first account by private key using a mnemonic phrase(example: want rocket grape message raccoon goose lumber loves memory to stamp fight) you will create a password to complete setup for the extension, then confrim 100ETH.

## Open up a terminal and setup project sandbox
```sh
cd ~ && export XYO_HOME=`pwd`/xyo && echo "XYO_HOME set to $XYO_HOME" && cd $XYO_HOME
```

## Set up archivist

```sh
export ARCHIVIST_BRANCH=develop && mkdir -p $XYO_HOME && cd $XYO_HOME && git clone -b $ARCHIVIST_BRANCH https://github.com/XYOracleNetwork/app-archivist-nodejs.git archivist 

```

Build the archivist
```sh
cd $XYO_HOME/archivist && mkdir logs && mkdir archivist-db && yarn clean && yarn install && yarn build
```

## Set up database 

Configure your credentials, since this would be in a local environment, you can keep your user and password simple

```sh
export MYSQL_USER=admin && export MYSQL_PASSWORD=password
```

Start MySQL Service 
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

Pick a name for your node
```sh
export ARCHIVIST_NODE_NAME=my-archivist
```

Get your IP address and set it, if you want your archivist to be addressable by other nodes you will have to provided the ip address

```sh
export MY_IP=`ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'` && echo "My ip is $MY_IP"
```

## Start the archivist

```sh
NODE_ENV=develop \
NODE_NAME=$ARCHIVIST_NODE_NAME \
IP_OVERRIDE=$MY_IP \
SQL__HOST=127.0.0.1 \
SQL__USER=$MYSQL_USER \
SQL__PASSWORD=$MYSQL_PASSWORD \
SQL__DATABASE=Xyo \
SQL__PORT=3306 \
nohup node packages/app-archivist/dist/index.js &
```

Tail the logs to check if a genesis block was created. 

```sh
tail -f -n 1000 nohup.out
```

**Note** Be sure to check the transactions tab on the Ganache-UI to see your transactions as you execute them, especially after starting the archivist, diviner, and any conversations/transactions.

## Set up the diviner
```sh
export DIVINER_BRANCH=develop
```

```sh
cd $XYO_HOME && git clone -b $DIVINER_BRANCH https://github.com/XYOracleNetwork/api-diviner-nodejs.git diviner
```

Build the diviner

```sh
cd $XYO_HOME/diviner && mkdir logs && mkdir diviner-db && yarn clean && yarn install && yarn build
```

## Set up an ipfs instance 

```sh
mkdir -p $XYO_HOME/ipfs/staging && \
mkdir -p $XYO_HOME/ipfs/data && \
export ipfs_staging=$XYO_HOME/ipfs/staging && \
export ipfs_data=$XYO_HOME/ipfs/data
```

Start the ipfs instance on Docker

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

In order for us to handle current issues with cors, we go ahead and set the config in our docker to handle this. This will be updated, in the mean time, this step is necessary

```sh
docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```
```sh
docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
```

Restart ipfs service

```sh
docker restart ipfs_host
```

Add staked consensus file to ipfs

```sh
curl 'https://ipfs.io/ipfs/QmeFQ55jVbtuVoFYXJdZWKoWMjjs9DZ9teCQhrhTLofGP2' > $ipfs_staging/XyoStakedConsensus.json && \
  docker exec ipfs_host ipfs add -r /export/XyoStakedConsensus.json
```

Set the environment variable for diviner eth address, make sure to confirm that it is the first account in your ganache.

```sh
export ABOUT__ETH_ADDRESS=`curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' 127.0.0.1:8545 | python -c "import sys, json; print json.load(sys.stdin)['result'][0]"` && echo "Diviner ethereum address is $ABOUT__ETH_ADDRESS"
```

After setting this up, let's get the Pay On Delivery contracts built, we'll clone from XYO-payondelivery-solidity.

## Build contracts

```sh
cd $XYO_HOME && git clone https://github.com/XYOracleNetwork/demo-payondelivery-solidity.git payondelivery && cd $XYO_HOME/payondelivery && yarn
```

For the deployment of this contract, we encourage you to use our tool, dApploy

```sh
yarn global add tool-dapploy-nodejs
```

## Deploy contracts

```sh
dapploy
```

Confirm in ganache-ui that transactions have contracts have been created in transactions tab. You will also see the first account will have slightly less ethereum from the cost of gas in deploying the contract

Copy contract's artifacts into ipfs

```sh
cp -r build/contracts $ipfs_staging && docker exec ipfs_host ipfs add -r /export/contracts
```

This will output something like `added Qm...` contracts. You should be able to open a browser and view the contracts folder at 127.0.0.1:8080/ipfs/Qm... **be sure to copy the last hash value which is your ipfs deployed contract** 

Open a browser with metamask installed and go to our smart contract playground **dApper** https://dapper.layerone.co/

Clear application cache through inspect-tools -> Application -> clear storage -> clear **site data** then refresh page

Then **connect wallet** with the account that we added earlier

Go to setting by clicking the gear icon

Now we will set the ipfs config and add the abi

Set ipfs config to **host: localhost port: 8080 protocol: http**

Then copy the contracts ipfs hash from earlier and click **add abi**

You should be able to select a contract from left dropdown, `PayOnDelivery` and the bottom drop down and click the button below select contract to update the contract address

If you select the `owner()` button and execute it should display your public key and if you go to question and add a parameter of `0` an error will occur because there are no questions yet, so lets create some data to ask questions about first.

Create mock data (this the question) and send to MySQL

```sh
cd $XYO_HOME/archivist && node packages/data-generator/dist/index.js --host=127.0.0.1 --user=$MYSQL_USER --password=$MYSQL_PASSWORD --database=Xyo --port=3306
```

Open sequel pro

Set database credentials to **host: 127.0.0.1 username: admin password: password database: Xyo port: 3306**

Then select query tab and use this query

```sh
SELECT 
	obp.originBlockId,
	GROUP_CONCAT(pk.key SEPARATOR ", "),
	ob.signedHash
FROM OriginBlockParties obp
	JOIN OriginBlocks ob on ob.id = obp.originBlockId
	JOIN KeySignatures ks on obp.id = ks.originBlockPartyId
	JOIN PublicKeys pk on pk.id = ks.publicKeyId
GROUP BY obp.originBlockId	
HAVING COUNT(obp.originBlockId) > 1
```

Click `run current` to view results.

The results showing are all the bound witness interactions in the system.

Select the first row, second column and copy the the items as the **itemA** and **itemB** which will go into the escrowPayment dapper view. Make sure to copy each value individually and place where you won't forget

Go back to dApper:
Click on escrowPayment() and get ready to update some keys
For the beneficiary input, put the last ganache account public key
paste the itemA and itemB in the string slots respectively 

For marker put `0` and for `Value to transfer` do `10000000000000000000` (10Eth). Execute contract which will bring up metamask to confirm. Check your ganache-ui that 10Eth is in escrow for the first address.
 
Now we make note of the address from dapper.layerone.co for PayOnDelivery contract. Click on the gear icon, and then select your PayOnDelivery contract. On the UI to the right you should see Deployments *network* -- *address*. The address should with `0x` (similar to your accounts on Ganache)

Go back to terminal and run

```sh
export ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS={CONTRACT_ADDRESS_ABOVE_REPLACE_ME}
```

Change directory to diviner

```sh
cd $XYO_HOME/diviner
```

## Start diviner

Once the diviner is started it will find the first question in the smart contract, ask the archivist for data about the publicKeys (itemA, itemB), the archivist provides an answer and then the diviner answers the SmartContract which results in the beneficiary getting 10Eth out of escrow. You can verify this by going to ganache-ui and looking at the Account Balances.

```sh
ABOUT__URL=$MY_IP \
ABOUT__SEEDS__ARCHIVISTS=http://127.0.0.1:11001 \
IPFS__HOST=127.0.0.1 \
ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS=$ETHEREUM_CONTRACTS__PAY_ON_DELIVERY__ADDRESS \
WEB3__HOST=http://127.0.0.1:8545 \
nohup node packages/app-diviner/dist/index.js &
```

## Tear Down 

Stop and remove all docker containers
```sh
docker stop ipfs_host && docker rm ipfs_host && docker stop XyoDb && docker rm XyoDb && docker system prune -a
```
```sh
rm -rf $XYO_HOME
```
Kill diviner and archivist processes
```sh
ps -A | grep archivist # Then kill process id
```
```sh
ps -A | grep diviner # Then kill process id
```

## Congratulations

You just successfully completed the set up and build of an XYO Archivist and Diviner, then deployed a smart contract to initiate the terms of the conversation, then set up a question for the diviner to ask the archivist, and finally completing the question/answer session complete with a reward. Check back for more awesome walkthroughs from **XYO!** 