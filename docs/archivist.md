---
id: archivist
title: Archivist App
---
<div class="alert alert-danger text-center" role="alert">
  This guide is not for production ready Archivists, this is a product currently in development and will be updated often prior to mainnet release. 
  For production-ready Archivists you will be able to download an npm package for use in your application.
</div>

<div class="alert alert-info text-center" role="alert">
  Difficulty Level: Intermediate
</div>

# Getting started with an XYO Archivist

An archivist in the XYO network serves as the data-layer component between the bridge and the diviner.
It accepts and aggregates data from bridges and makes that data available to Diviners via a GraphQL API. In essence it is the scribe node of the XYO network.

As long as an archivist follows the protocols of the XYO network specified in the [yellow paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf)
they may implement the component however they wish. This application supports using MySQL as the persistence engine that
backs the archivist repository, LevelDb to persist origin-chain data specific to this node, and TCP as the transport
layer for doing bound-witness interactions between the Archivist and other Bridges.

## Prerequisites

- You must have node installed. If you don't, the easiest way to get `node` and `npm` is through [`homebrew`](https://brew.sh/) a package manager for Apple systems, for Linux systems use the package manager for your distro.

- We also recommend in most cases to use [NVM - Node Version Manager](https://github.com/creationix/nvm) which will allow you to manage multiple active node.js versions. This may also save you some installation headaches.

**Note** We use the stable `10.15.3` node.js release.

- If you are using linux on ubuntu, you should use commands as the root by entering `sudo su` or you could run `sudo` prior to key commands. This guide will also prompt you for entering `sudo` when needed.

- You must also have yarn installed: `homebrew`: `brew install yarn` or your Linux package manager.
- **Note** if you are using ubuntu, you can install `node` and `yarn` with these helpful articles:
  - [Installing `node` on ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
  - [Installing `yarn ` on ubuntu](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/)

- You must have [docker](https://www.docker.com/get-started) installled and running
  - There are instructions on how to install and run docker in the [get started]((https://www.docker.com/get-started)) guide
  - [Download the Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) for easiest entry
  - If you are using ubuntu, you'll need to use [Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
  - Make sure that docker runs throughout this process

- This node app wizard works macOS and Linux, and at this time this app is not Windows compatible

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

### Bootstrap or manage your MySQL service

```sh
  yarn manage:db
```

```sh
Existing XyoDb container found. Status: Running
? What would you like to do with the existing XyoDb service? …
❯ Restart the existing database 
  Kill it and start a new one // SELECT THIS OPTION
  No action
```

**Note that you should go ahead and kill any processes, and allow the wizard to select your db credentials**

- These credentials are a simple username and password

```sh
? Enter a username for the sql database › admin
? Enter a password for the sql database › password
```

Once you confirm these values your MySQL service will start up

```sh
Starting MySQL service with credentials:
	Username: admin
	password: password

Successfully started a MySQL service @ 127.0.0.1:3306

```
**NOTE** No need to paste the command into your shell for the development environment

### Start the Archivist

```sh
yarn start:archivist
```

**NOTE** Keep this terminal window open and leave it alone after starting the archivist

### Pull in some mock data
**You'll have to do this in another terminal window or tab and keep this open as well**

```sh
yarn mock-data
```

### Run your node package with a configuration
 - instead of going directly to `yarn start:archivist` you can run it with your own configuration: 

```sh
node packages/app
```

If you want to configure your archivist even further, please follow these steps **exactly** as written (if for some reason you are running any instances on ports (except the database port 3306) you can change the last digit by one - within the recommended ranges as seen below) although in your initial setup you should be okay using the default values given:

```sh
No config found, would you like to create one now? (Y/n) · true
```

```sh
What would you like to name your XYO Node? · <your name>
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
*Note* Make sure that this port is different than the diviner port, or any other port that might be in use. 

```sh 
Do you want to add bootstrap nodes? (Y/n) · true
```

These addresses were found on the `peers.xyo.network` DNS record.You can select and deselect each address by pressing spacebar · Hit enter and do not select items

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
Ensure that your archivist can do bound witness
```sh
Do you want your node to act as a server for doing bound-witnesses? (Y/n) · true
```

Select your port for peer to peer protocol 
```sh 
What port would you like to use for your peer to peer protocol? · 11000
``` 
This is your bound witness port, it should be different from the diviner port

Ensure that the component features for support are *archivist*
```sh
Which component features do you want your Xyo Node to support? · archivist
``` 
If you select diviner, you won't get the correct options to set up an archivist

Set up the database with the values from your bootstrapping earlier
```sh
Enter the `host` value for your MySQL database · 127.0.0.1
Enter the `user` value for your MySQL database · admin
Enter the `password` value for your MySQL database · password
Enter the `database` value for your MySQL database · Xyo
```
**This is the one port value that you should not have to change!**
```sh
Enter the `port` value for your MySQL database · 3306
```

Set up your archivist with a GraphQL Server
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

You will see some GraphQL data and dialing nodes, notice the Xyo objects and nodes at work! 

You should then see that you have discovered a peer, which will feed your archivist heuristics! Exciting stuff! 

You can also confirm you have peers by pointing to your browser with `localhost:<your graphql port>` and entering this query:

```sql
{
  about {
    peers
  }
}
```

To check out a bound witness, try this command (you are running the database on Docker)

```sh
docker exec -i XyoDb mysql -uadmin -ppassword  <<< "SELECT meta FROM Xyo.OriginBlocks WHERE id=6"
```

When you enter that command, you are going to get some output with a rawSignature, heuristics, rssi, and latitude and longitude!

To make it prettier, let's go into the browser and enter our raw JSON in a string like this:

console.log(JSON.parse(`your raw json (make sure you use backtics!)`))

## Congratulations! You have now started an XYO Archivist!

## Developer Guide

Developers should conform to git flow workflow. Additionally, we should try to make sure
every commit builds. Commit messages should be meaningful serve as a meta history for the
repository. Please squash meaningless commits before submitting a pull-request.

There is git hook on commits to validate the project builds. If you'd like to commit your changes
while developing locally and want to skip this step you can use the `--no-verify` commit option.

i.e.

```sh
  git commit --no-verify -m "COMMIT MSG"
```

## License

Only for internal XY Company use at this time

## Credits

<p align="center">Made with  ❤️  by [<b>XY - The Persistent Company</b>] (https://xy.company)</p>