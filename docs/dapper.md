---
id: dapper
title: dApper
---


<h3 align="center">
  "View your Smart Contracts"
</h3>
<p align="center">
  Made with ❤️
  <br/>by [XYO](https://xyo.network)
</p>

# Let's Get Dapper

`yarn` it out in the project directory:
```
yarn
```

### Run dapper
```
yarn start
```

## Dapploy Some Contracts locally

We need to deploy a suite of smart contracts

Before we do let's set up an array of account addresses using **Ganache**:

There are two ways you can do this:

1. If you don't already have it, [download and install Ganache from their site](https://truffleframework.com/ganache)

2. Same with [MetaMask from their site](https://metamask.io/)

3. Configure Ganache on 8545:
 - Open Ganache
 - Click the Gear Icon ( ⚙️ ) to open `Preferences...`.	
   Make sure that port is set to 8545.	
 - Click "Save and Restart" in the top-right of Ganache	
 
4. Configure Metamask network to `localhost`
 - Sign into Metamask and change Network on Metamask to localhost 8545		
 
5. Add ganache account to metamask
 - In your Ganache UI, you'll see a list of ~10 addresses.		

Or: 

Install Ganache CLI

```sh
npm install -g ganache-cli
```
or
```sh
yarn global add ganache-cli
```

Then enter this command in its own terminal(its recommended that in local development you maintain the same mnemonic and accounts): 

```sh
ganache-cli --port 8545 --deterministic
```

Once you start up ganache, **do not** close the terminal window. You will see a mnemonic and 10 ethereum account addresses and the amount of ether for each

1. In another terminal window, use [Dapploy](https://github.com/XYOracleNetwork/tool-dappdeployer-node) and create your first standalone smart contact project:
```sh
dapploy init my-first-coin -s ERC20
cd my-first-coint
``` 
### dApploy the contracts

```sh
dapploy
```
This command will compile, migrate, and deploy your contracts in your local environment

At this point, you could interact with your contracts using `truffle console` but why do that when you can now use dApploy?

```sh
dapploy -p
```

The `-p` tag pins your contracts to IPFS for remote access

**Note** Copy your IPFS hash which can be found after running `dapploy -p`, you will need it in the next section

```sh
Running dapploy
Contracts stored to IPFS <your IPFS hash>
```

### View Local Contracts on IPFS

dApper's settings interface allows you to set up the environment to upload your ABI through an IPFS address, this is where we use the ipfs address from our *dApployed* contract

<h1 align="left">
  <img alt="dapper-ipfs-config" src="/docs/assets/dapper_ipfs_config.png">
</h1>

Set the `portis` network to `Development (local)` and in the text input under `Add ABI` and `IPFS address` paste your IPFS hash, which was given to you when you ran `dapploy -p` on your `my-first-coin` project:

```sh
Running dapploy
Contracts stored to IPFS <your IPFS hash>
```

## Play with your Smart Contracts

### You should now see your contracts in the `contract simulator`

<h1 align="left">
  <img alt="dapper-contract-simulator" src="/docs/assets/dapper_contract_simulator.png">
</h1>

# Congrats! You can interact with your contracts in an easy to use UI!