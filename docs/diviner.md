---
id: diviner
title: Diviner App
---

<div class="alert alert-danger text-center" role="alert">
  This guide is not for production ready Diviners, this is a product currently in development and will be updated often prior to mainnet release. 
  For production-ready Diviners you will be able to download an npm package for use in your application.
</div>

<div class="alert alert-danger text-center" role="alert">
  Difficulty Level: Advanced
</div>

<div class="alert alert-info text-center" role="alert">
  <h1>Upgrade coming soon</h1>
  <p>Before you begin, we wanted to let you know that there will be an update to this guide to decrease the setup time before getting your Diviner up and running</p>
</div>

# Getting started with an XYO Diviner

An Diviner in the XYO network serves as the querying component who has a conversation with the archivist.
It is the diviner’s job to answer queries proposed on the network by finding relevant data stored in archivists. and makes that data available to end users via a GraphQL API. In essence it is the knowledge seeker and consensus node of the XYO network.

As long as an Diviner follows the protocols of the XYO network specified in the [yellow paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf)
they may implement the component however they wish. The key is that the interactions between a diviner and an archivist must be proved through a bound witness to validate the data.

## Prerequisites
- You must have node installed. If you don't, the easiest way to get `node` and `npm` is through [`homebrew`](https://brew.sh/) a package manager for Apple systems, for Linux systems use the package manager for your distro

- We also recommend in most cases to use [NVM - Node Version Manager](https://github.com/creationix/nvm) which will allow you to manage multiple active node.js versions. This may also save you some installation headaches

**Note** We use the stable `10.15.3` node.js release

- You must have yarn installed: `homebrew`: `brew install yarn` or your Linux package manager
- You must have Lerna installed globally to use its CLI tool: `npm install --global lerna`

- **Note** if you are using ubuntu, you can install `node` and `yarn` with these helpful articles:
  - [Installing `node` on ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
  - [Installing `yarn ` on ubuntu](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/)

- You must have [docker](https://www.docker.com/get-started) installed and running
  - There are instructions on how to install and run docker in the [get started]((https://www.docker.com/get-started)) guide
  - [Download the Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) for easiest entry
  - Make sure that docker runs throughout this process
- Ganache cli - you will need to run an instance 
  - We recommend this command `ganache-cli --port 8545 --deterministic --networkId 5777`
- A good understanding of how to use [Metamask](https://metamask.io/)
- This node app wizard works optimally with MacOS, and at this time this app is not Windows compatible

## Getting Started

### Clone the repository 

```bash
git clone https://github.com/XYOracleNetwork/sdk-core-nodejs.git 
```

### Go into the directory

```sh
cd sdk-core-nodejs
```

Since this is part of an SDK with multiple packages, we will use Lerna to link the dependencies

```sh
lerna bootstrap
```

### Install additional dependencies

```sh
yarn install
```

### Build the SDK

```sh
yarn build
```

**Note** This will take a moment, so be patient, it will take around a minute.

## Start and Configure your Diviner

```sh
yarn start:diviner
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
*Note* Make sure that you use this port: `11500` specifically for your diviner. 

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

Enter our IPFS host value - this will make it easier for you to interact with our smart contracts to use the diviner
```sh
What is the IPFS host value › ipfs.layerone.co
```
Enter the IPFS Port 
```sh
What is the IPFS port value › 5002
```
Enter the IPFS protocol - we will use `https`
```sh
What is the IPFS protocol? …
❯ https
```
Ensure that the component features for support are Diviner
```sh 
Which component features do you want your Xyo Node to support? · Diviner
``` 
If you select diviner, you won't get the correct options to set up an Diviner

Supply the diviner with an Ethereum node address - here we will supply you with one

```sh 
What is your Ethereum Node address? › wss://kovan.infura.io/ws/v3/8f1e6c44394f4366a49095d9cac828e2
```

Supply the diviner with an account address (this would come from Ganache *copy the first address from your accounts list when you started the ganache service*)

```sh 
What is your Ethereum Account address? This will start with `0x` ›
```

Now, keep this in mind, for this question it will ask you for your Ethereum Private Key. You can get this from the Ganache service. Since this configuration is creating a yaml file (if you need to learn more about yaml, [click here](https://yaml.org/)) your diviner is relatively safe as long as you don't share or commit this file to a code repository. Also, we are starting up a diviner in a test environment that also encrypts and stores locally. With that said, make sure that the Ganache Wallet you are using has accounts and mnemonic phrase only on testnets! Make sure that you copy the first private key from the array of private keys (since you are using the first address from your accounts list) the private key is slightly longer, but also starts with `0x`.

```sh
What is your Ethereum Private key? Diviners encrypt private keys and store encrypted copy locally.› <your Private Key>
```

Next you will have to create a password for your Diviner

```sh
Please add a Diviner password. ›
```

Since we are all running on a testnet, we want you to utilize our Simple Consensus Smart Contract Library (SCSC)

Here is the complete list of smart contract addresses in the library and their IPFS hashes:

SCSC addresses
```sh
  XyStakingConsensus:
    address: '0x234872fB24514b32185A125313a53177DDA97c12'
    ipfsHash: QmZks1kgJACSBC958T3vUiRDNNXNe9mcocrnFvdB2HqgKo
  XyGovernance:
    address: '0x5d757557C3bd5945cefBBc17dcABBCEC94D7D73E'
    ipfsHash: QmSAVruwKEcEEVTtWwKsSeebq1fwejzK7wRCDEbJzojryT
  XyBlockProducer:
    address: '0x84037e3109e1d199a58e592b7BBa370b19B0b898'
    ipfsHash: QmSYRyw5KdHTz7ZNtqJybjvE2Jf1RnzeprBPWbk2SDypN9
```

Supply the diviner with the XyStakingConsensus smart contract address

```sh 
What is the XyStakingConsensus contract address? This will start with `0x` ›
```

Supply the diviner with the XyStakingConsensus IPFS Hash

```sh 
What is the XyStakingConsensus IPFS address? This will start with `Qm` ·
```

Supply the diviner with the XyGovernance smart contract address

```sh 
What is the XyGovernance contract address? This will start with `0x` ›
```

Supply the diviner with the XyGovernance IPFS Hash

```sh 
What is the XyGovernance IPFS address? This will start with `Qm` ›
```

Supply the diviner with the XyPayOnDelivery smart contract address

```sh 
What is the XyPayOnDelivery contract address? This will start with `0x` ›
```

Supply the diviner with the XyPayOnDelivery IPFS Hash

```sh 
What is the XyPayOnDelivery IPFS address? This will start with `Qm` ›
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

We will not start the node yet, there is one more thing we need to do
```sh 
Do you want to start the node after configuration is complete? (Y/n) · false
```

Open `packages/app/config/` from the current directory in another terminal tab or window

- Find your `<Diviner Name>.yaml` file
- Look for the `ethereum` configuration under `diviner`
- Add this to the configuration under `account`: 
  ```yaml
  salt: cf82e4a9b4187f4e
  ```
- Replace the `privateKey` with this:
  ```yaml
  encryptedKey: >-
        a6a444bab66e1a29a4f3249f2db54543f38dcea3c799a547a8533b13b5da6d4476b41b43ac55bfbc1aaa8fe5363763f791cc90c950794fe9227a5e5dda218c1cd740f119e380ce4ed3ee01389cb77e5b
  ```

Once you do that start the diviner: 

```sh
yarn start <Your Diviner Name>
```

### Run Your Diviner in a Persistent Session

To run the diviner in a persistent terminal we will use GNU `screen` which is natively available on Mac OS and can also be installed
[Click on this guide](https://www.linode.com/docs/networking/ssh/using-gnu-screen-to-manage-persistent-terminal-sessions/)

Before you run this:
```sh
yarn start <Your Diviner Name>
```

Enter this command in your terminal 
```sh
screen
```
After you press return, you will notice that the header of your terminal session will display `screen (screen)`

Optionally, you may enter this command to name your `screen` session with a archivist or diviner name 

```sh
screen -S <session name>
```
To verify the name 
```sh
screen -list
```
This will display a message 
```sh
There is a screen on:
        <PID>.<session name> (attached)
1 Socket in <path to>.screen.
```
Verify your session name, note that you can also see session (if the teminal is not tabbed) at the top of your terminal window.

You can also run multiple screens (on multiple terminal windows or tabs) and when you do, you can check for screen sessions with `-list`
```sh
There are screens on:
        <PID>.<session name (first session)> (Attached)
        <PID>.<session name (second session)> (Attached)
2 Sockets in <path to>.screen.
``` 

Now go ahead and run your diviner 

```sh
yarn start <Your Diviner Name>
```

To avoid having to keep your terminal window open, you can detach the screen with `control+a d`. This will detach your `screen` instance

This will detach your screen session while running your Archivist, which would prevent it from shutting down, even when your machine is in sleep mode
Your terminal should display this under the command
```sh
[detached]
```

Now your process is running in the background.

To re-attach the session use this command `screen -r`

For more commands including stopping the process: 

```sh
Ctrl+a c - Creates a new Screen window. The default Screen number is zero.
Ctrl+a 0-9 - Switches between windows 0 through 9.
Ctrl+a x - Locks your terminal window. You will have to enter your password to unlock your terminal session.
Ctrl+a n - Switches to the next window.
Ctrl+a k - Kills the current window. When the command is issued, you will be asked to confirm by entering a y or n.
Ctrl+a A - Will allow you to enter a title for the window.
Ctrl+a d - Detaches from a Screen.
Ctrl+a ? - Will display a list of all the command options available for Screen.
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
