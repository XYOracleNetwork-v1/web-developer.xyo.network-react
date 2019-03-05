---
id: diviner
title: Diviner App
---

# Getting started with an XYO Diviner

An Diviner in the XYO network serves as the querying component who has a conversation with the archivist.
It is the diviner’s job to answer queries proposed on the network by finding relevant data stored in archivists. and makes that data available to end users via a GraphQL API. In essence it is the knowledge seeker and consensus node of the XYO network.

As long as an Diviner follows the protocols of the XYO network specified in the [yellow paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf)
they may implement the component however they wish. The key is that the interactions between a diviner and an archivist must be proved through a bound witness to validate the data.

# Prerequisites

- You must have [docker](https://www.docker.com/get-started) installled and running
  - There are instructions on how to install and run docker in the [get started]((https://www.docker.com/get-started)) guide
  - [Download the Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) for easiest entry
  - Make sure that docker runs throughout this process
- Ganache cli - you will need to run an instance 
  - We recommend this command `ganache-cli --port 8545 --deterministic --networkId 5777`
- A deployed Pay On Delivery smart contract. (Make sure you copy the address for that contract)

- This node app wizard works optimally with MacOS, and at this time this app is not Windows compatible

# Getting Started

##### Clone the repository 

```bash
git clone https://github.com/XYOracleNetwork/sdk-core-nodejs.git -b develop
```

##### Go into the directory

```sh
cd sdk-core-nodejs
```

##### Install dependencies

```sh
yarn install
```

##### Build the SDK

```sh
yarn build
```

**Note** This will take a moment, so be patient, it will take around 30 seconds.

##### Start the Diviner

```sh
yarn start:diviner
```

##### Deploying the Pay On Delivery Smart Contract

**NOTE** Keep this terminal window open and leave it alone after starting the Diviner

##### Run your package with a simple node command

```sh
node packages/app
```

You will now be directed to configure your Diviner, please follow these steps **exactly** as written (if for some reason you are running any instances on ports (except the database port 3306) you can change the last digit by one):

`No config found, would you like to create one now? (Y/n) · true`

`What would you like to name your XYO Node? · <name for your node>`

`Where would you like to store your data? · /Users/<yourUserDirectory>/<yourProjectDirectory>/sdk-core-nodejs/packages/app/node-data`

`What is your public ip address? · 0.0.0.0`

`What port would you like to use for your peer to peer protocol? · 11500` *Note* Make sure that this port is different than the archivist port, or any other port that might be in use. 

`Do you want to add bootstrap nodes? (Y/n) · true`

`These addresses were found on the `peers.xyo.network` DNS record.You can select and deselect each address by pressing spacebar · Hit enter and do not select items`

This will default to false, press `y` or `t`
`Do you want to add any more individual bootstrap nodes? (y/N) · true`

Go ahead and enter the example address provided
`What is the address value of the bootstrap node? Should look something like /ip4/127.0.0.1/tcp/11500 · /ip4/127.0.0.1/tcp/11501` This port number should match the one that you entered for your peer to peer protocol answer **(for convention a good range is 11501 - 11510) one of the nodes needs to run 11500**

This will default to false, now we hit enter
`Do you want to add any more individual bootstrap nodes? (y/N) · false`

Ensure that your Diviner can do bound witness
`Do you want your node to act as a server for doing bound-witnesses? (Y/n) · true`

Select your port for peer to peer protocol 
`What port would you like to use for your peer to peer protocol? · 11000` This is your bound witness port, it should be different from the diviner port

Ensure that the component features for support are Diviner
`Which component features do you want your Xyo Node to support? · Diviner` If you select diviner, you won't get the correct options to set up an Diviner

Supply the diviner with an Ethereum node address - **Note** we recommend that you use a local instance for this exercise at port `8545`

`What is your Ethereum Node address? › http://127.0.0.1:8545`

Supply the diviner with an account address (this would come from Ganache *copy the first address from your accounts list when you started the ganache service*)

`What is your Ethereum Account address? This will start with `0x` ›`

Supply the diviner with the Pay On Delivery smart contract address

`What is the PayOnDelivery contract address? This will start with `0x` ›`

Set up your Diviner with a GraphQL Server
`Do you want your node to have a GraphQL server (Y/n) · true`
`What port should your GraphQL server run on? · 11001`

Press enter to set up all of the GraphQL endpoints
`Which GraphQL api endpoints would you like to support? (use space-bar to toggle selection. Press enter once finished) · about, blockByHash, blockList, intersections, blocksByPublicKey, entities`

Start the node
`Do you want to start the node after configuration is complete? (Y/n) · true`

## Congratulations! You have now started an XYO Diviner!