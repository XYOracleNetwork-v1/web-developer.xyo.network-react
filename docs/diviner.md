---
id: diviner
title: Diviner App
---

<div class="alert alert-danger text-center" role="alert">
  Difficulty Level: Advanced
</div>

## Upgrade coming soon
Before you begin, we wanted to let you know that there will be an update to this guide to decrease the setup time before getting your Diviner up and running

# Getting started with an XYO Diviner

An Diviner in the XYO network serves as the querying component who has a conversation with the archivist.
It is the diviner’s job to answer queries proposed on the network by finding relevant data stored in archivists. and makes that data available to end users via a GraphQL API. In essence it is the knowledge seeker and consensus node of the XYO network.

As long as an Diviner follows the protocols of the XYO network specified in the [yellow paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf)
they may implement the component however they wish. The key is that the interactions between a diviner and an archivist must be proved through a bound witness to validate the data.

## Prerequisites
- You must have node installed. If you don't, the easiest way to get `node` and `npm` is through [`homebrew`](https://brew.sh/) a package manager for Apple systems, for Linux systems use the package manager for your distro.

- You must also have yarn installed: `homebrew`: `brew install yarn` or your Linux package manager.

- You must have [docker](https://www.docker.com/get-started) installled and running
  - There are instructions on how to install and run docker in the [get started]((https://www.docker.com/get-started)) guide
  - [Download the Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) for easiest entry
  - Make sure that docker runs throughout this process
- Ganache cli - you will need to run an instance 
  - We recommend this command `ganache-cli --port 8545 --deterministic --networkId 5777`
- A good understanding of how to use [Metamask](https://metamask.io/)
- This node app wizard works optimally with MacOS, and at this time this app is not Windows compatible

- A deployed **Pay On Delivery smart contract**
  - **Point your browser to `https://ipfs.layerone.co/ipfs/QmaHuJh3u5J4W8WYhJnfH1yZUWWwUaehsVLbUPMEd4ymqN`**
  - This address includes a `hash` value that represents our SCSC library as deployed on IPFS
  - You will use this `hash` value to deploy a contract for the diviner to use: `QmaHuJh3u5J4W8WYhJnfH1yZUWWwUaehsVLbUPMEd4ymqN`
  - Point your browser to `https://dapper.layerone.co/`
  - Connect your metamask wallet to the Kovan testnet
<h1 align="left">
  <img alt="metamask-kovan" src="/docs/assets/metamask_kovan_new.png" height="884" width="756">
</h1>

  - Once you have connected your wallet to the Kovan testnet, connect your wallet in dApper 
<h1 align="left">
  <img alt="dapper-connect-wallet" src="/docs/assets/dapper_connect_wallet.png" height="332" width="730">
</h1>
  - Click on `settings` in the lower left hand corner of dApper
    - The settings should be preconfigured to the XYO network IPFS on port `5002` and protocol `https`
<h1 align="left">
  <img alt="ipfs-config" src="/docs/assets/ipfs_config.png">
</h1>
  - Copy the ipfs hash `QmaHuJh3u5J4W8WYhJnfH1yZUWWwUaehsVLbUPMEd4ymqN` and paste in the `Add ABI` `IPFS Address` text field
    - Ensure that the portis network above is set to `Kovan`
<h1 align="center">
  <img alt="portis-setting" src="/docs/assets/portis_kovan.png">
</h1>
  - After these settings, click `Add ABI`
  - After a few seconds, the `Add ABI` button will confirm with a green checkmark that the ABI has been added 
  - Click on `Contract Simulator` and select `XYPayOnDelivery` from the dropdown
<h1 align="left">
  <img alt="contract-select" src="/docs/assets/select_contract.png">
</h1>
  - Click on `Deploy Contract`, which will take you to the `XYPayOnDelivery` constructor screen.
<h1 align="left">
  <img alt="deploy-contract-screen" src="/docs/assets/deploy_contract_pod.png">
</h1>
  - Skip `optional notes or Description`, and add a `staking consensus` address and an `_xyoToken` address
  - Only for this walkthrough will we add some simple account addresses for the consensus and token fields, when you start up a diviner to interact with XYO, you will need to deploy a `governance` contract, then a `XyStakingConsensus` contract, and add the true address for the staking consensus contract along with a staked XYO token
  - Once you enter the address data in the `stakingConsensus` and `_xyoToken` fields, click `Deploy Contract` this will direct you to a Metamask confirmation for the transaction and then it will take a few seconds for transaction approval and contract deployment
  - Once you have successfully deployed the `XYPayOnDelivery` contract, you should see a component pop up with an IPFS hash and a contract address. Copy and paste the contract address in a notes app. You will need this contract address during your diviner setup. 
<h1 align="left">
  <img alt="contract-info" src="/docs/assets/pod_info.png">
</h1>


## Getting Started

### Clone the repository 

```bash
git clone https://github.com/XYOracleNetwork/sdk-core-nodejs.git -b develop
```

### Go into the directory

```sh
cd sdk-core-nodejs
```

### Install dependencies

```sh
yarn install
```

### Build the SDK

```sh
yarn build
```

**Note** This will take a moment, so be patient, it will take around 30 seconds.

## Start the Diviner

```sh
yarn start:diviner
```

### Deploying the Pay On Delivery Smart Contract

**NOTE** Keep this terminal window open and leave it alone after starting the Diviner

### Run your package with a simple node command

```sh
node packages/app
```

You will now be directed to configure your Diviner, please follow these steps **exactly** as written (if for some reason you are running any instances on ports (except the database port 3306) you can change the last digit by one):

```sh 
No config found, would you like to create one now? (Y/n) · true
```

```sh
What would you like to name your XYO Node? · <name for your node>
```

```sh
Where would you like to store your data? · /Users/<yourUserDirectory>/<yourProjectDirectory>/sdk-core-nodejs/packages/app/node-data
```

```sh
What is your public ip address? · 0.0.0.0
```

```sh 
What port would you like to use for your peer to peer protocol? · 11500
``` 
*Note* Make sure that this port is different than the archivist port, or any other port that might be in use. 

```sh 
Do you want to add bootstrap nodes? (Y/n) · true
```

```sh
These addresses were found on the `peers.xyo.network` DNS record.You can select and deselect each address by pressing spacebar · 
```
Hit enter and do not select items

This will default to false, press `y` or `t`
```sh 
Do you want to add any more individual bootstrap nodes? (y/N) · true
```

Go ahead and enter the example address provided
```sh 
What is the address value of the bootstrap node? Should look something like /ip4/127.0.0.1/tcp/11500 · /ip4/127.0.0.1/tcp/11501
``` 
This port number should match the one that you entered for your peer to peer protocol answer **(for convention a good range is 11501 - 11510) one of the nodes needs to run 11500**

This will default to false, now we hit enter
```sh
Do you want to add any more individual bootstrap nodes? (y/N) · false
```

Ensure that your Diviner can do bound witness
```sh
Do you want your node to act as a server for doing bound-witnesses? (Y/n) · true
```

Select your port for peer to peer protocol 
```sh 
What port would you like to use for your peer to peer protocol? · 11000
``` 
This is your bound witness port, it should be different from the diviner port

Ensure that the component features for support are Diviner
```sh 
Which component features do you want your Xyo Node to support? · Diviner
``` 
If you select diviner, you won't get the correct options to set up an Diviner

Supply the diviner with an Ethereum node address - **Note** we recommend that you use a local instance for this exercise at port `8545`

```sh 
What is your Ethereum Node address? › http://127.0.0.1:8545
```

Supply the diviner with an account address (this would come from Ganache *copy the first address from your accounts list when you started the ganache service*)

```sh 
What is your Ethereum Account address? This will start with `0x` ›
```

Supply the diviner with the Pay On Delivery smart contract address

```sh 
What is the PayOnDelivery contract address? This will start with `0x` ›
```

Set up your Diviner with a GraphQL Server
```sh
Do you want your node to have a GraphQL server (Y/n) · true
```
```sh
What port should your GraphQL server run on? · 11001
```

Press enter to set up all of the GraphQL endpoints
```sh 
Which GraphQL api endpoints would you like to support? (use space-bar to toggle selection. Press enter once finished) · about, blockByHash, blockList, intersections, blocksByPublicKey, entities
```

Start the node
```sh 
Do you want to start the node after configuration is complete? (Y/n) · true
```

## Congratulations! You have now started an XYO Diviner!

You can also confirm you have peers by pointing to your browser with `localhost:<your graphql port>` and entering this query:

```sql
{
  about {
    peers
  }
}
```

**This is just the beginning, now go to our [Archivist App Guide](https://developers.xyo.network/docs/en/archivist/) to start up an Archivist!**
- When you do, you'll be able to have a conversation between these two XYO nodes and execute queries!
