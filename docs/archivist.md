---
id: archivist
title: Archivist App
---

# Getting started with an XYO Archivist

An archivist in the XYO network serves as the data-layer component between the bridge and the diviner.
It accepts and aggregates data from bridges and makes that data available to Diviners via a GraphQL API.

As long as an archivist follows the protocols of the XYO network specified in the [yellow paper](https://docs.xyo.network/XYO-Yellow-Paper.pdf)
they may implement the component however they wish. This application supports using MySQL as the persistence engine that
backs the archivist repository, LevelDb to persist origin-chain data specific to this node, and TCP as the transport
layer for doing bound-witness interactions between the Archivist and other Bridges.

# Getting Started

## Docker

A quick and accessible way to get up and running is with Docker. Make sure that you are logged into Docker. More info on installation and setup for Docker [here](https://www.docker.com/get-started). For terminal commands on checking containers you can use `docker` the base command for the Docker CLI, see `docker --help` for commands. Also, if you are using VSCode, you will be able to check your container status and logs through the VSCode in-house terminal.

First, satisfy the MySQL requirement, this will create a new container running a mySQL Database:

```sh
  docker run \
  -d \
  -p 3306:3306 \
  -e MYSQL_USER={user} \
  -e MYSQL_PASSWORD={password} \
  -e MYSQL_DATABASE={database} \
  -e MYSQL_RANDOM_ROOT_PASSWORD=yes \
  mysql:5.7.24 --sql_mode=NO_ENGINE_SUBSTITUTION

```

**NOTE** Please substitute variable `{user}` `{password}` and `{database}` with your own values.

When the docker command is executed it will return a docker-container id, copy that id. 
To get the ip address of the docker container you can run:

```sh
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' {docker-container-id}
```

Take note of the ip address as this will be required configure the Archivist application (use the ip as your SQL__HOST). Make sure that you have the path set for logs and private data as seen in the configuration below where you can actively access:

```sh
  docker run \
  -d \
  -p 11000:11000 \
  -p 11001:11001 \
  -v {path-to-logs-folder}:/workspace/logs \
  -v {path-to-private-data-folder}:/workspace/archivist-db \
  -e NODE_NAME={archivist-name} \
  -e IP_OVERRIDE={publicly-accessible-ip} \
  -e SQL__HOST={ip-address-of-mysql-service} \
  -e SQL__USER={user-of-mysql-service} \
  -e SQL__PASSWORD={name-of-user-on-mysql-service} \
  -e SQL__DATABASE={name-of-database-on-mysql-service} \
  -e SQL__PORT={port-of-database-on-mysql-service} \
  xyonetwork/app-archivist:latest
```

List of parameters:

- `-d` run docker as daemon

- `-p 11000:11000` bind port 11000 from docker container to local network, this is the node port.

- `-p 11001:11001` bind port 11001 from docker container to local network, this is the graphQL port. Later you can use this on localhost to query in graphQL playground.

- `-v {path-to-logs-folder}:/workspace/logs` Mount **logs** folder from local disk to docker container

- `-v {path-to-private-data-folder}:/workspace/archivist-db` Mount **private-data** folder from local disk to docker container

- `-e NODE_NAME={archivist-name}` The name of the Archivist

- `-e IP_OVERRIDE={publicly-accessible-ip}` The publicly addressable ip address of this Archivist

- `-e SQL__*` SQL configuration settings

- `xyonetwork/app-archivist:latest` Run the latest archivist image from docker-hub.

After running with the configuration you should see this at the tail of your log: 

```sh
GraphQLServer: Graphql server ready at url: http://localhost:11001/
```
You can now use that URL to start working in the GraphQL playground. For more info on GraphQL, check out the intro and learn page [here](https://graphql.org/learn/).

When you are interacting with the playground, you can search the schema for data available to the Archivist. 

## Running Locally 

If you want to run the archivist locally, follow these steps to install: 

Before downloading the application, there are number of System requirements that will need to be satisfied.

- [NodeJS](https://nodejs.org/en/) The application is built using NodeJS. Internally we've tested against version 10.13.0. Consider using [nvm](https://github.com/creationix/nvm) to satisfy this dependency. Among other benefits, it may save you the trouble of using `sudo` in upcoming commands.

- [MySQL](https://dev.mysql.com/downloads/mysql/5.7.html#downloads) A MySQL service is currently required to meet the Archivist feature set. This will likely change in the future and there will be support for a number of different database providers. At the moment though a MySQL service dependency will need to be satisfied for the archivist to run properly. Internally we've tested against version 5.7.24

Download as a global npm package.

```sh
  npm install -g @xyo-network/app-archivist
```

If this command fails you may need to use the `sudo` modifier.

```sh
  sudo npm install -g @xyo-network/app-archivist
```

If this fails again it it likely because the LevelDB dependency is being built from source in protected user-space on the System OS. To get around this the npm option of `--unsafe-perm=true` may be used.

```sh
  sudo npm install -g @xyo-network/app-archivist --unsafe-perm=true
```

Assuming one of the above 3 commands succeed, you now have a downloaded version of the archivist on your system. To confirm run

```sh
which xyo-archivist
```

It should print something that approximates `/usr/local/bin/xyo-archivist`. If nothing is printed out you may have to close and reopen your terminal window.

## Running the Application

Once the MySQL service is available with the correct schema please note the values for your MySQL service.

- host
- port
- user
- password
- database

The application can then be started passing these arguments to application.

```sh
  SQL__HOST={host} \
  SQL__PORT={port} \
  SQL__USER={user} \
  SQL__PASSWORD={password} \
  SQL__DATABASE={database} \
  xyo-archivist
```

For example,

```sh
  SQL__HOST=127.0.0.1 \
  SQL__PORT=3306 \
  SQL__USER=ryan \
  SQL__PASSWORD=password \
  SQL__DATABASE=Xyo \
  xyo-archivist
```

A number of things should happen at this point. You should see a number of logs come up on the screen informing you that you've created and origin chain and other log statements displaying the output of a number of SQL logs. This is good. If the application is stopped you'll notice two folders in the directory that you started the application in.

- `archivist-db` This folder contains the data relevant to origin chain owner of this archive. It is very important as it contains private/public key pairs which make it possible to create new blocks on the origin chain. DO NOT DELETE OR SHARE THIS FOLDER

- `logs` Logs relating to the routines of the application. These will be deleted every 14 days

** Happy Archiving **

## Contributing

If you'd like to contribute to the project as a developer or just run the project from source the directions below should help you get started.

First, clone the repository. And set the branch to the develop branch

```sh
  git clone -b develop https://github.com/XYOracleNetwork/app-archivist-nodejs.git
```

Then change working directory to that of the repository

```sh
  cd app-archivist-nodejs
```

Download dependencies

```sh
  yarn install
```

The source code is written in TypeScript and needs to be transpiled into JavaScript.

```sh
  yarn build
```

Assuming the MySQL service dependency has been satisfied you can now run

```sh
  yarn start
```

If you are having trouble connecting to the MySQL instance it is likely because the set of credentials do not match that of the application.

You can optionally override the MySQL connection parameters with environments variables:

- host: SQL__HOST
- port: SQL__PORT
- user: SQL__USER
- password: SQL__PASSWORD
- database: SQL__DATABASE

For example,

```sh
  export SQL__HOST=127.0.0.1 && \
  export SQL__PORT=3306 && \
  export SQL__USER=pizza-mind && \
  export SQL__PASSWORD=super-duper-secret-password && \
  export SQL__DATABASE=db && \
  yarn start
```

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