---
id: archivist
title: ARCHIVIST APP
---

<div class="alert alert-danger text-center" role="alert">
  <h3>Beta Software</h3>
  This documentation contains preliminary information about an API or technology in development. This information is subject to change, and software implemented according to this documentation should be tested.
</div>


<div class="alert alert-danger text-center" role="alert">
  This guide is not for production ready Archivists, this is a product currently in development and will be updated often prior to mainnet release. 
  For production-ready Archivists you will be able to download an npm package for use in your application.
</div>

<div class="alert alert-info text-center" role="alert">
  Difficulty Level: Intermediate
</div>

## Getting started with an XYO Archivist

An archivist in the XYO network serves as the data-layer component between the bridge and the diviner.
It accepts and aggregates data from bridges and makes that data available to Diviners via a GraphQL API. In essence it is the scribe node of the XYO network.

As long as an archivist follows the protocols of the XYO network specified in the [yellow paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf)
they may implement the component however they wish.

## Prerequisites

- You must have node installed
If you don't, the easiest way to get `node` and `npm` is through

<a href="https://brew.sh/" 
    rel="noopener noreferrer"
    target="_blank"
    class="font-weight-bold"
    >
      Homebrew
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

This is a package manager for Apple systems, for Linux systems use the package manager for your distro

We also recommend in most cases to use 

<a href="https://github.com/creationix/nvm" 
    rel="noopener noreferrer"
    target="_blank"
    class="font-weight-bold"
    >
      NVM - Node Version Manager
  <i class="p-2 fas fa-external-link-alt"></i>
</a>

This will allow you to manage multiple active node.js versions. This may also save you some installation headaches

**Note** We use the stable `10.15.3` node.js release.

- If you are using linux on ubuntu, you should use commands as the root by entering `sudo su` or you could run `sudo` prior to key commands. This guide will also prompt you for entering `sudo` when needed.

- You must have yarn installed: `homebrew`: `brew install yarn` or your Linux package manager
- You must have Lerna installed globally to use its CLI tool: `npm install --global lerna`

- **Note** if you are using ubuntu, you can install `node` and `yarn` with these helpful articles:
  - [Installing `node` on ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
  - [Installing `yarn ` on ubuntu](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/)

- You must have [docker](https://www.docker.com/get-started) installled and running
  - There are instructions on how to install and run docker in the [get started]((https://www.docker.com/get-started)) guide
  - [Download the Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) for easiest entry
  - If you are using ubuntu, you'll need to use [Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
  - Make sure that docker runs throughout this process

- This node app wizard works macOS and Linux, and at this time this app is not Windows compatible

## Installation and Setup

### Install 

Install the alpha archivist from the XYO app

```sh
npm install @xyo-network/app-xyo-nodejs@alpha -g
```

### Run the package

```sh
xyolo
```

**Note** This will prompt you to create a configuration and path

### Options for `xyolo` usage

```bash
Options:
  -i, --install         installs the plugins
  -r, --run             runs node
  -f, --fetch <string>  fetch from url
  -h, --help            output usage information
```

<div class="alert alert-danger text-center" role="alert">
Current update as of 8/12/2019 - Additional instructions to come on the 8/16 update
</div>
