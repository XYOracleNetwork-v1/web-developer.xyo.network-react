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

1. When in doubt, `yarn` it out in the project directory:
```
yarn
```

2. Run dapper
```
yarn start
```

## Dapploy Some Contracts locally

We need to deploy some smart contracts

1. Use [Dapploy](https://github.com/XYOracleNetwork/tool-dappdeployer-node) and create your first standalone smart contact project:
```
./dapploy init
./dapploy
``` 

**or** Use [Truffle](https://truffleframework.com) to deploy your smart contracts to any Ethereum blockchain, and note the folder of your ABI, usually in `<truffle_project>/build/contracts`

## View Local Contracts

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
 - In your Ganache UI, you'll see a list of ~10 addresses. Click the key icon (🔑) next to one of 'em. And then COPY the "Private Key"		
 
6. Start dapper. This should open up `localhost:3000` in a chrome browser.
```
yarn start
```

You should see the Dapper UI with no smart contracts loaded.


## Play with your Smart Contracts

1. In Dapper UI, go to the settings cog and select `Local Path` and enter `<truffle_project>/build/contracts` (Priject dir from Pt. II)

3. Tap `Save` and you should be able to see the FungibleToken in the dropdown and play with it!

4. Select `name()` function and you should see the name, "Fun Token" displayed.

<img src="https://ipfs.xyo.network/ipfs/QmeHnp8ZZS9tdM8aCbGC9xHhmW8CGDem8PiELvdNZxpfY9" />