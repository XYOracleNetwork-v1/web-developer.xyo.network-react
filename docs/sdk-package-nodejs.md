---
id: SDK-Package-Node
title: SDK Package NodeJS
---

## Project Overview

### Scope of features

This package includes core functionality for all XYO NodeJS projects, implementing the core objects and services used in the XYO protocol. Additionally it provides core XYO features like performing bound-witnesses, hashing, signing, serialization, origin-chain management and TCP Network services. It exposes a number of CLI applications for running archivists and diviners. This is a holistic package for a complete set of operations on XYO.

### Yellow Paper

Before you continue into the SDK, please review the XYO protocol for creating origin-blocks as specified in the [XYO Yellow Paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf). It describes the behavior of how a node on the XYO network should create bound-witnesses. Note, the behavior is not coupled with any particular technology constraints around transport layers, cryptographic algorithms, or hashing algorithms.

### Architecture and Design

As such, the design of the system is aimed at abstracting these concepts
so that the concrete implementations of these components can be swapped out so long as they conform to the correct interfaces.

Practically, this library uses TypeScript, which transpiles to JavaScript. Additionally, a TCP network provider has been implemented. Furthermore, some of the most popular public-key cryptography algorithms and hashing algorithms have been wrapped and made available to the core library. If you're favorite crypto signing algorithm is not yet supported, we welcome pull-requests and suggestions, please see [contributing guidelines here]().

[Here](https://github.com/XYOracleNetwork/spec-coreobjectmodel-tex) is a link to the core object model that contains an index of major/minor values and their respective objects.

## Getting started

### Prerequisites
- You must have node installed. If you don't, the easiest way to get `node` and `npm` is through [`homebrew`](https://brew.sh/) a package manager for Apple systems, for Linux systems use the package manager for your distro

- We also recommend in most cases to use [NVM - Node Version Manager](https://github.com/creationix/nvm) which will allow you to manage multiple active node.js versions. This may also save you some installation headaches

**Note** We use the stable `10.15.3` node.js release

- You must have yarn installed: `homebrew`: `brew install yarn` or your Linux package manager
- You must have Lerna installed globally to use its CLI tool: `npm install --global lerna`

- **Note** if you are using ubuntu, you can install `node` and `yarn` with these helpful articles:
  - [Installing `node` on ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
  - [Installing `yarn ` on ubuntu](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/)

### Clone repository

```sh
git clone https://github.com/XYOracleNetwork/sdk-core-nodejs
```

### Install dependencies

After cloning the repository, change directory to the folder that houses the repository.

```sh
  cd sdk-core-nodejs
```

Since this is part of an SDK with multiple packages, we will use Lerna to link the dependencies

```sh
lerna bootstrap
```

Once you've switched to the repository directory, install the dependencies. We prefer `yarn` but `npm` works just as well.

```sh
  yarn install
```

### Build

Once the dependencies are installed run

```sh
  yarn build
```

### Running the project

This will transpile the TypeScript into javascript and link the local packages together.

To start a reference implementation of a base-node that can perform bound-witnesses as a server run:

```sh
  node packages/base-node
```

This will start a node on port 11000 and accept incoming bound-witness requests

### Testing

#### Run all tests

```sh
  yarn test
```

#### Run a set of tests in a particular file:

i.e. Where the test file is `test/integration/lib.spec.ts`

```sh
  yarn test lib.spec.ts
```

## Additional Documentation

All packages have their own README files as well. These are the README files that will be found on their respective npm package pages as well.

For the complete list of README files for all packages, see the [SDK Package Node Repository README](https://github.com/XYOracleNetwork/sdk-core-nodejs/blob/develop/README.md)


## Development Tools

#### NVM (Node Version Manager)

A number of the libraries that this project depends on may fail at install-time because they need to be built from C++ source where the output is specific to the host system. The underlying issue is that it is trying to modify files in protected areas of the file-system.

This is all to say that [nvm](https://github.com/creationix/nvm) is strongly recommended for developers. Additionally you will find a `.nvmrc` file at the root-level of the project that specifies the currently supported version of Node.

#### Workflow

The project structure was designed to support and encourage a modular architecture. This project uses a typical [Lerna](https://lernajs.io/) layout. That is, all modules are located in the [packages folder](packages). This allows for a couple of things that are conducive to an efficient development and release process:

- Local linking of modules during development
- Ability to release patches, minor, and major version upgrades to npm with ease
- TypeScript linking using [project references](https://www.typescriptlang.org/docs/handbook/project-references.html)

That said, since this is a TypeScript project, the source must be transpiled to JavaScript before execution. So, if a change is made to one or more modules in the package directory `yarn build` must be run from the project root for the changes to reflect.

## Typical Workflow

- Developer pulls down repository and changes directory in project root
- Developer runs `yarn install` to install all dependencies of all the packages in accordance with [yarn workspace feature](https://yarnpkg.com/lang/en/docs/workspaces/)
- Developer runs `yarn build` to transpile TypeScript source to JavaScript
- Developer makes changes in one or more packages
- Developer runs `yarn build` to see those changes reflected and linked accordingly
- On occasion, running `yarn clean` may prove useful for resetting the project to clean state
- When a change-set is complete and has gone through the proper code-review etc, a release can be made running `yarn release`. Release versions should follow [SemVer](https://semver.org/) standards.

#### Useful Scripts

There are a number of scripts for managing the different services that this project depends.

In particular you can manage your ganache, ipfs, and MySQL docker services using the commands found in the `scripts` section of the [package.json file](package.json).

##### Bootstrap or manage your MySQL service

```sh
  yarn manage:db
```

##### Bootstrap or manage your local development ganache instance

```sh
  yarn manage:ganache
```

##### View balances of Eth accounts on ganache instance

```sh
  yarn:manage:ganache:balances
```

##### Bootstrap or manage your local development ipfs instance

```sh
  yarn manage:ipfs
```

##### Add a file/folder to your IPFS node using a relative or absolute path

```sh
  yarn manage:ipfs:add {/path/to/file}
```

## License

Only for internal XY Company use at this time

## Credits

Made with ❤️
by [XYO](https://xyo.network)