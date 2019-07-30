---
id: explore-getting-started
title: XYO Explore 
sidebar_label: Getting Started with Explore
---

<div class="alert alert-info text-center" role="alert">
  <h2>Getting Started with Explore App</h2>
</div>

## Queries in the Explore App

Everything in the Explore App starts with Queries

<h1 align="left">
  <img alt="queries in explore app" src="/docs/assets/explore_queries.png">
</h1>

### Entering a Query

Enter all queries described in this guide into this field on the dashboard page

<h1 align="left">
  <img alt="where to enter a query" src="/docs/assets/query_field.png">
</h1>

### Block Hash Query

The `hash` query retrieves block contents from the block hash provided. 

Enter the query
`hash`:`BLOCK_HASH`

<h1 align="left">
  <img alt="block contents from a block hash query" src="/docs/assets/enter_hash_query.gif">
</h1>

You should see block contents upon a successful query

<h1 align="left">
  <img alt="where to enter a query" src="/docs/assets/block_hash_detail.png">
</h1>

Information included in the contents

- Previous Hash
- Public Key (of previous hash)
- Rssi (of previous hash)
- Index (of previous hash)
- GPS
- BlockBytes

### Lat and Long Query

The `near` query retrieves blocks near GPS point provided.

Enter the query
`near`:`LAT,LNG`

<h1 align="left">
  <img alt="near query gif" src="/docs/assets/near_query.gif">
</h1>

This is displayed as points on an interactive map

<h1 align="left">
  <img alt="mapped point with blocks from a gps query" src="/docs/assets/gps_query_result.png">
</h1>

### Recent Query

The `recent` query gets `n` recent blocks. 

Enter the query
`recent`:`LIMIT (integer value - example typed as 01)`

<h1 align="left">
  <img alt="recent query gif" src="/docs/assets/recent_query.gif">
</h1>

This is a dynamic query that will change since blocks are continuously created 

You will see your query value in the lower left corner of the map view. 

This is an exmaple after a `recent:030` query

<h1 align="left">
  <img alt="map result from recent block query" src="/docs/assets/map_view_recent_block_query.png">
</h1>

Note that this query is `Getting the 30 most recent bound witnesses`

<h1 align="left">
  <img alt="video map view" src="/docs/assets/recent_map_view.gif">
</h1>

### Where Query

The `where` query gets the last known blocks from a device public key

Enter the query
`where`:`PUBLIC_KEY`

<h1 align="left">
  <img alt="where query gif" src="/docs/assets/where_query.gif">
</h1>

This is displayed as points on an interactive map

<h1 align="left">
  <img alt="mapped point with blocks from a device query" src="/docs/assets/device_blocks_query_result.png">
</h1>

You can get further detail on the map by zooming in and clicking on specific points

<h1 align="left">
  <img alt="where detail gif" src="/docs/assets/map_view_where_detail.gif">
</h1>

The detail of the point has a block hash, which when clicked executes a block hash query

<h1 align="left">
  <img alt="block hash details on map" src="/docs/assets/block_hash_on_map.png">
</h1>

### Chain Query

Enter the query
`chain`:`PUBLIC_KEY`

The `chain` query retrieves the latest bound witness from an origin chain and current reward data for the chain

<h1 align="left">
  <img alt="chain query gif" src="/docs/assets/chain_query.gif">
</h1>

Here you can also create an alias for the public key of your query which you can use in future queries.

<h1 align="left">
  <img alt="chain query result detail" src="/docs/assets/chain_query_result.png">
</h1>

This view also includes links to post this data to twitter, telegram, facebook, and reddit

You can also see the rewards that this chain has earned (this is if this chain participated in answering queries from a diviner)

The data down the chain graphically represents index values, rssi, the devices that bound witnessed on the block.

You can also click on the block icon on each part of the chain to see the block detail - this is the `hash` query

<h1 align="left">
  <img alt="block icon click gif" src="/docs/assets/block_click.gif">
</h1>

### Geohash Query

The `geohash` query gets known blocks from the geohash provided

Enter the query
`geohash`:`GEOHASH`

<h1 align="left">
  <img alt="geohash query gif" src="/docs/assets/geohash_query.gif">
</h1>

This is displayed as points on an interactive map

<h1 align="left">
  <img alt="geohash query result map" src="/docs/assets/geohash_query_map_result.png">
</h1>

Similar to other queries that return a result on the interactive map, the bound witness points represented by pins can be clicked to return a `hash` query.

<h1 align="left">
  <img alt="geohash query map gif" src="/docs/assets/geohash_query_map.gif">
</h1>

### Blocks Query

The `blocks` query retrieves random `n` blocks

Enter the query
`blocks`:`LIMIT (integer value - example typed as 01)`

<h1 align="left">
  <img alt="blocks query gif" src="/docs/assets/blocks_query.gif">
</h1>

You will be able to look at the lisiting of blocks and interact with the blocks on the interactive map

<h1 align="left">
  <img alt="random block result gif" src="/docs/assets/block_random_result.gif">
</h1>

## Using the Interactive Map

The map on XYO Explore has pins that you can interact with

You can get hash information and see the bound witness trail along with the number of blocks

The map also contains a list view, social sharing, and an advanced button giving you access to cURL requests and JSON

Queries that take you immediately to map view:

- Near query
- Recent query
- Where query
- Geohash query
- Blocks query

## cURL Requests

coming soon - available on explore.xyo.network under **Show Advanced**

## JSON Response

coming soon - available on explore.xyo.network under **Show Advanced**

## What you should look for

coming soon