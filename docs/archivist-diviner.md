---
id: archivist-diviner
title: Setting Up Archivist-Diviner
---

<div class="alert alert-danger text-center" role="alert">
  This guide is not for production ready Archivist-Diviners, this is a product currently in development and will be updated often prior to mainnet release. 
  For production-ready Archivists you will be able to download an npm package for use in your application.
</div>

<div class="alert alert-info text-center" role="alert">
  Difficulty Level: Intermediate
</div>

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
**Note** This will take a moment, so be patient, it will take around a minute.

```sh
yarn build
```

### Bootstrap your SQL Database
**NOTE** We will have other storage options available in future updates

```sh
yarn manage:db
```

### Begin configuring your Archivist-Diviner
```sh
yarn start
```

- You will get a prompt to create a new config, since you don't have a new one
```sh
No config found, would you like to create one now? (Y/n) › true
```

- Give a name to your Archivist-Diviner
```sh
What would you like to name your XYO Node? › <Some Archivist-Diviner name of your choosing>
```

- Press enter to keep data within the package 
```sh
Where would you like to store your data? › /Users/<your user folder>/<your project folder>/sdk-core-nodejs/packages/app/node-data
```

- You can press enter to default to this public ip address 
```sh
What is your public ip address? › 0.0.0.0
```

- Press enter to set the port for peer to peer protocol
```sh
What port would you like to use for your peer to peer protocol? · 11500
```

- Press `f` or `n` since right now we don't need to bootstrap any additional nodes
```sh
Do you want to add bootstrap nodes? (Y/n) · false
```

- Press enter to ensure your archivist-diviner is running a server for bound witnessing
```sh
Do you want your node to act as a server for doing bound-witnesses? (Y/n) › true
```

- Press enter to set the port for bound witnessing peer to peer protocol
```sh
What port would you like to use for your peer to peer protocol? › 11000
```

- Press enter to set the IPFS host value to the XYO network 
```sh
What is the IPFS host value › ipfs.xyo.network
```

- Press enter to set the IPFS port to `5002`
```sh
What is the IPFS port value · 5002
```

- Press enter to ensure the first option for IPFS Protocol is selected - `https`
```sh
What is the IPFS protocol? …
❯ https
```

- Select `archivist and diviner` for node component feature support - this ensures the node you are running is an archivist-diviner
```sh
Which component features do you want your Xyo Node to support? …
  archivist
  diviner
❯ archivist and diviner
```

- Select `mysql` for data repository type (we will have LevelDB and Neo4j support soon)
```sh
What type of repository? · mysql
```

- Enter the defaut host for MySQL 
```sh
Enter the `host` value for your MySQL database › 127.0.0.1
```

- Enter the default user value 
```sh
Enter the `user` value for your MySQL database › admin
```

- Enter the default password value 
```sh
Enter the `password` value for your MySQL database › password
```

- `Xyo` is our database
```sh
Enter the `database` value for your MySQL database · Xyo
```

- Enter the default port for MySQL 
```sh
Enter the `port` value for your MySQL database · 3306
```

- Use our Kovan Ethereum node 
```sh
What is your Ethereum Node address? · wss://kovan.infura.io/ws/v3/8f1e6c44394f4366a49095d9cac828e2
```

- Use an ethereum address from a kovan network - [click here]() for a guide on how to setup your eth wallet on Kovan
```sh
What is your Ethereum address? This will start with `0x` › <your Kovan ethereum account address>
```

- Enter the associated private key to the account
```sh
What is your Ethereum Private key? Diviners encrypt private keys and store encrypted copy locally. ·
```

- Enter a password of your choice 
```sh
Please add a Diviner password. ›
```

Since we are all running on Kovan, we want you to utilize our Simple Consensus Smart Contract Library (SCSC)

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

Supply the diviner with the XyBlockProducer smart contract address

```sh 
What is the XyBlockProducer contract address? This will start with `0x` ›
```

Supply the diviner with the XyBlockProducer IPFS Hash

```sh 
What is the XyBlockProducer IPFS address? This will start with `Qm` ›
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

As this package continues to be updated, we need to check the `yaml` config file that this wizard created for us:

- Specifically, we want to look for our `ipfs` config, to make sure that it looks like this:

In your `<your archivist-divner-name>.yaml`

```yaml
ipfs:
host: ipfs.xyo.network
protocol: https
port: '5002'
```

If it doesn't look like this, update the `ipfs` part of the config to the settings above

Now, we can start our new Archivist-Diviner

```sh
yarn start <your archivist-divner-name>
```

That's it!

### Run Your Archivist-Diviner in a Persistent Session

To run the archivist-diviner in a persistent terminal we will use GNU `screen` which is natively available on Mac OS and can also be installed
[Click on this guide](https://www.linode.com/docs/networking/ssh/using-gnu-screen-to-manage-persistent-terminal-sessions/)

Before you run this:
```sh
yarn start <Your Archivist-Diviner Name>
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

Now go ahead and run your archivist-diviner 

```sh
yarn start <Your Archivist-Diviner Name>
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

## Congratulations! You have now started an XYO Archivist-Diviner!

**This is just the beginning, now go to our [Archivist App Guide](https://developers.xyo.network/docs/en/archivist/) to start up an Archivist!**
- When you do, you'll be able to have a conversation between these two XYO nodes and execute queries!

<p align="center">Made with  ❤️  by [<b>XY - The Persistent Company</b>] (https://xy.company)</p>
