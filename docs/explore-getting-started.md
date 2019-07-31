---
id: explore-getting-started
title: XYO EXPLORE
sidebar_label: Getting Started with Explore
---

<div class="alert alert-danger text-center" role="alert">
  Difficulty Level: Intermediate to Advanced
</div>

<div class="alert alert-info text-center" role="alert">
  <h2>Getting Started with Explore App</h2>
</div>

<div class="alert alert-info text-center" role="alert">
  <h2>XYO Explore Query Responses</h2>
  <p>The first 100 blocks from a query are free.</p>
  <p>XYO Explore queries are available at 1 XYO per additional query (from 101 - 2000 blocks).</p>
  <p>Additional details can be viewed under Available Plugins -> Payment</p>
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

### Available queries

The other key feature of map view is access to available queries

<h1 align="left">
  <img alt="available queries gif" src="/docs/assets/map_available_queries.gif">
</h1>

Available queries offered
- Chain Segment
- Intersection
- Geohash
- Time
- Page
- Last Known Location

Each available query comes with an option to execute a **Sample Query**. This prefills the query fields for you, all you would have to do is click **Run Query** after the fields have been filled

<h1 align="left">
  <img alt="sample query gif" src="/docs/assets/sample_query.gif">
</h1>

The map also contains a list view, social sharing, and an advanced button giving you access to cURL requests and JSON

Queries that take you immediately to map view:

- Near query
- Recent query
- Where query
- Geohash query
- Blocks query

## cURL Requests

Available on explore.xyo.network with map view queries under **Show Advanced**

### Near and Geohash cURL Requests

`geohash:GEOHASH`, `near:LAT,LNG`

For the response, look at [the JSON response](#near-and-geohash-query-json-response)

cURL Request
```curl
curl '<https://ac0.xyo.network/>' \\
  \-H 'Accept-Encoding: gzip, deflate, br' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Accept: application/json' \\
  \-H 'Connection: keep-alive' \\
  \-H 'DNT: 1' \\
  \-H 'Origin: <https://ac0.xyo.network>' \\
  \--data-binary '{"query":" query { queryFor(query: \\"{\\\\"select\\\\":{\\\\"name\\\\":\\\\"SELECTOR_GEOHASH\\\\",\\\\"config\\\\":{\\\\"geohash\\\\":\\\\"xn7\\\\",\\\\"limit\\\\":\\\\"100\\\\"}},\\\\"mutate\\\\":{\\\\"name\\\\":\\\\"MUTATOR_HUMAN\\\\",\\\\"config\\\\":{}},\\\\"payment\\\\":{\\\\"apiKey\\\\":\\\\"key\\\\"}}\\") }"}' --compressed
```

### Where and Chain cURL Requests

`where:PUBLIC_KEY`, `chain:PUBLIC_KEY`
For the response, look at [the JSON response](#where-and-chain-query-json-response)

cURL Request
```curl
curl '<https://ac0.xyo.network/>' \\
  \-H 'Accept-Encoding: gzip, deflate, br' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Accept: application/json' \\
  \-H 'Connection: keep-alive' \\
  \-H 'DNT: 1' \\
  \-H 'Origin: <https://ac0.xyo.network>' \\
  \--data-binary '{"query":" query { queryFor(query: \\"{\\\\"select\\\\":{\\\\"name\\\\":\\\\"SELECTOR_INDEX\\\\",\\\\"config\\\\":{\\\\"publicKey\\\\":\\\\"15mr23ZtkaQsQGV1GTpbpJJwnqGWtkZsxfjE3VDxqtMbrCA7RGQnodb6ycCiWeds5pDKAgU4svmwMs4qFaJyXddj9jB\\\\",\\\\"index\\\\":-1,\\\\"amount\\\\":\\\\"100\\\\",\\\\"up\\\\":false}},\\\\"mutate\\\\":{\\\\"name\\\\":\\\\"MUTATOR_HUMAN\\\\",\\\\"config\\\\":{}},\\\\"payment\\\\":{\\\\"apiKey\\\\":\\\\"key\\\\"}}\\") }"}' --compressed
```

### Recent cURL Requests

`recent:LIMIT`
For the response, look at [the JSON response](#recent-query-json-response)

cURL Request
```curl
curl '<https://ac0.xyo.network/>' \\
  \-H 'Accept-Encoding: gzip, deflate, br' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Accept: application/json' \\
  \-H 'Connection: keep-alive' \\
  \-H 'DNT: 1' \\
  \-H 'Origin: <https://ac0.xyo.network>' \\
  \--data-binary '{"query":" query { queryFor(query: \\"{\\\\"select\\\\":{\\\\"name\\\\":\\\\"SELECTOR_TIME\\\\",\\\\"config\\\\":{\\\\"fromTime\\\\":1564604355416,\\\\"limit\\\\":\\\\"40\\\\"}},\\\\"mutate\\\\":{\\\\"name\\\\":\\\\"MUTATOR_HUMAN\\\\",\\\\"config\\\\":{}},\\\\"payment\\\\":{\\\\"apiKey\\\\":\\\\"key\\\\"}}\\") }"}' --compressed
```

### Blocks cURL Requests

`blocks:LIMIT`
For the response, look at [the JSON response](#blocks-query-json-response)

cURL Request
```curl
curl '<https://ac0.xyo.network/>' \\
  \-H 'Accept-Encoding: gzip, deflate, br' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Accept: application/json' \\
  \-H 'Connection: keep-alive' \\
  \-H 'DNT: 1' \\
  \-H 'Origin: <https://ac0.xyo.network>' \\
  \--data-binary '{"query":" query { queryFor(query: \\"{\\\\"select\\\\":{\\\\"name\\\\":\\\\"SELECTOR_PAGE\\\\",\\\\"config\\\\":{\\\\"limit\\\\":\\\\"40\\\\"}},\\\\"mutate\\\\":{\\\\"name\\\\":\\\\"MUTATOR_HUMAN\\\\",\\\\"config\\\\":{}},\\\\"payment\\\\":{\\\\"apiKey\\\\":\\\\"key\\\\"}}\\") }"}' --compressed
```

## JSON Requests and Responses

Available on explore.xyo.network with map view queries under **Show Advanced**

### Near and Geohash Query JSON Requests

`near:LAT,LNG`, `geohash:GEOHASH`

JSON Query

```json
{
  "select": {
    "name": "SELECTOR_GEOHASH",
    "config": {
      "geohash": "xn7",
      "limit": "100"
    }
  },
  "mutate": {
    "name": "MUTATOR_HUMAN",
    "config": {}
  },
  "payment": {
    "apiKey": "key"
  }
}

```

### Near and Geohash Query JSON Response 

( 1 of 100 example) ***This query output can also be fetched by a cURL request***

```json
[
  {
    "signedHash": "1N9ogr8TAsq4DFJ397Zs6VxocG9PzX7EzJZkw2WXd9Rpsch",
    "bytes": "YAICESAVdCAZRAAMQR1m+fyx4+H1L+2EMpeO6lRLjhfTOuoduHdrQZWQvy163fJiGojiS+CMC6ageMCDeVT02A+c/7olUFAY5LGqB7sAAwUAAA1OIAgkABAhOjnJhqtz+rBx7LO2/r3VDn0wr4+qJS3vj+JyTH2fJRJgFQEBIBlEAAxBhH7FrUiETI2xKr3B7Knk0wWy6TApaMtYnIstBf78zognsk5xm6gSgTdUsLZZn0V+DKv6/yc+iko1u/+3s2P+VwAUCQAAAWpeEIGCIBIXABwJQEG7Gja39/4AHQlAYW4qIpNS2TAIJAAQIaCVTPTeCDx6T8GMKHk16DBIr3Lmu7aYL7B0GQs+DUJ6AAMFAAAACjAGZgAQIaCVTPTeCDx6T8GMKHk16DBIr3Lmu7aYL7B0GQs+DUJ6IX5teevlTLenbIqqVMSW4I9Y/tfUQj6MqrnhRuEz//3RIaXdd2iehpYE+ZDO8zyR1dHl6FGXXscNQpzHtxfNLFTfIBdJIBpGAAlDIB7IF/cdLWrhff+HPUruNkQW37jBDSNO+fukazbs+qCOIAf2gm1Law0mBbPJPF6v6k5Z7vVIb/sbQOBPaLcp/XDMIBdJIBpGAAlDILgzeknihSu0+23a73dlHxryxSNdM93Qp7sR6wvYaVOjIGT4gUyaT9mWtubLeLKZv/wpnvHgBlEgMnWXmqoV/xHl",
    "humanReadable": \[
      {
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mqa2EDVuzGP2zXoX2hjvSZ7fxBWjHHBeMKnpnTarJyo44dUQxpr4dHQBGrCS1hoPPaKdL8o3fFEAq2gipXV8uEUrn"
          }
        ],
        "index": 3406,
        "previousHash": "1N9dw65BjwzRDsxJkRFSTZi5P8w8m4etedA9wTczf7J7HEZ"
      },
      {
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15msdZxwFwjPdZ4dStQAasmdMxNdvLwn8vCLfa8PRQXEP5RjzsDysr27ufDWcDQS56S3oreLSayEigTEtx7zRPoe3rE"
          }
        ],
        "date": 1556356301186,
        "gps": {
          "lat": 35.46173748,
          "lng": 139.44264344
        },
        "previousHash": "1N9kpebMK7NUik78Gd8uruYHjYTSos4mhCferyrzR6PcDwP",
        "index": 10,
        "bridgeHashSet": [
          "1N9kpebMK7NUik78Gd8uruYHjYTSos4mhCferyrzR6PcDwP",
          "1N9iXKWZVcMkmx55gLWCEUP5rGtZVHw2YH9DCcGsHhCtdK6",
          "1N9mBGTN8qVSpPmJkbexJMQ1wRXTbuPQiNqY7SaNgmV4k4n"
        ]
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIB7IF/cdLWrhff+HPUruNkQW37jBDSNO+fukazbs+qCOIAf2gm1Law0mBbPJPF6v6k5Z7vVIb/sbQOBPaLcp/XDM"
          }
        ]
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDILgzeknihSu0+23a73dlHxryxSNdM93Qp7sR6wvYaVOjIGT4gUyaT9mWtubLeLKZv/wpnvHgBlEgMnWXmqoV/xHl"
          }
        ]
      }
    ]
  },
]
```

### Where and Chain Query JSON Requests

`where:PUBLIC_KEY`, `chain:PUBLIC_KEY`

JSON Query

```json
{
  "select": {
    "name": "SELECTOR_INDEX",
    "config": {
      "publicKey": "15mr23ZtkaQsQGV1GTpbpJJwnqGWtkZsxfjE3VDxqtMbrCA7RGQnodb6ycCiWeds5pDKAgU4svmwMs4qFaJyXddj9jB",
      "index": -1,
      "amount": "100",
      "up": false
    }
  },
  "mutate": {
    "name": "MUTATOR_HUMAN",
    "config": {}
  },
  "payment": {
    "apiKey": "key"
  }
}

```

### Where and Chain Query JSON Response
 
( 1 of 100 example) ***This query output can also be fetched by a cURL request***

```json
[
  {
    "signedHash": "1N9pNpEb29fdzcWer39WNfqgXFjxm9mgMjgrnPvS7RGaxed",
    "bytes": "YAIBzmAVAKswGUQADEEz1/SyVjpi1PJPUtk0HQA/+ZNJUz32yP8Y5zuR+sgMleSbK9IOosOEZ8699DTfY3/qiKgrVUBytPTGjSPS6nh+AB8FAAAAAAAgAgAwCCQADyEbUZsCSwv486eohDlnr2EYJ/v2kaZZi5PzApdB8VAAUAATAuMAAwUAAADYcAYAJQAQIRtRmwJLC/jzp6iEOWevYRgn+/aRplmLk/MCl0HxUABQIBWHIBlEAAxB/OBxHo2BWt/NbSHlmzJa8NDLGyeCfsJOTobu8gZMfUwNoOHG/tiC2hjwHujxqLKj4MelEfMy32MCuNtqg48fmAAUCQAAAWq3aok7MAgkABAhwlVIsswWiegPV5mc/H+Wm9T+r/Ngx9YpEyMeZ0vu7nUAAwUAAAEnABMCuQAeAtQgF0kgGkYACUMgQGuMT9oiNqrRKJlln8nOEL6kzQaiur6ITh5uZ01ZQ3kgS1k/TiW3OmQdJQnoqiWbsTrI9+Fbq23mqvTrvWmpi6UgF0kwGkYACUMgLe0WAx/a8DrKB+XoUoV46WtfF+ppVzdVK3idbiNiV5ogf193TQax7dAjBp9K6w9HtABO0bOUuqmX4RS29w1Ar3w=",
    "humanReadable": \[
      {
        "31": "AB8FAAAAAA==",
        "32": "ACACAA==",
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mr23ZtkaQsQGV1GTpbpJJwnqGWtkZsxfjE3VDxqtMbrCA7RGQnodb6ycCiWeds5pDKAgU4svmwMs4qFaJyXddj9jB"
          }
        ],
        "previousHash": "1LqZ5McrAwpH5b7XyLf87k8ATeKjyF5GwuHehP3fXAxX4WK",
        "rssi": -29,
        "index": 216,
        "bridgeHashSet": [
          "1N9brSVv7PPXAMqZ5obH3C1gxyqiPyozDyVTjaJ1LVSiuWw"
        ]
      },
      {
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mv3AUsy9EENcMmgxD9kGoZjdiA1ZNE85gQn9bKAdJN97kmCKdud2c6pAaW8SyMBEGe17zmAXYUjy8wXWuhiaGdWPR"
          }
        ],
        "date": 1557855373627,
        "previousHash": "1N9o6PqZnv4a4bf5ormnsPMd4HNoADHWRdBNZwKkqAU5Cx4",
        "index": 295,
        "rssi": -71,
        "rssiAt1m": -44
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIEBrjE/aIjaq0SiZZZ/JzhC+pM0Gorq+iE4ebmdNWUN5IEtZP04ltzpkHSUJ6Kolm7E6yPfhW6tt5qr0671pqYul"
          }
        ]
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIC3tFgMf2vA6ygfl6FKFeOlrXxfqaVc3VSt4nW4jYleaIH9fd00Gse3QIwafSusPR7QATtGzlLqpl+EUtvcNQK98"
          }
        ]
      }
    ]
  },
]
```

### Recent Query JSON Request

`recent:LIMIT`

JSON Query

```json
{
  "select": {
    "name": "SELECTOR_TIME",
    "config": {
      "fromTime": 1564604355416,
      "limit": "40"
    }
  },
  "mutate": {
    "name": "MUTATOR_HUMAN",
    "config": {}
  },
  "payment": {
    "apiKey": "key"
  }
}
```


### Recent Query JSON Response

( 1 of 40 example) **_This query output can also be fetched by a cURL request_**

```json
[
  {
    "signedHash": "1N9jvpjoMVTGV585bG2iJ1hUZAjb7MtUYKzNosVt7ckQNx3",
    "bytes": "YAIB7GAVALAwGUQADEGuV8BmKCLVAth5ZlgpjrZPizAnd5Ib73yUt9EBrEtLOw97jL7kvJ+kjoj31BEa0gzSkbDMA9IrjC6aTZgfZurAAB8FAAAAAAAgAgAAIQMTkzAIJAAQIShiSFPFmTWPin1DvCzEO89Pv77W8FquZxciv4kD/csWABMCuQADBQAAJANwBgAlABAhKGJIU8WZNY+KfUO8LMQ7z0+/vtbwWq5nFyK/iQP9yxYgFaAgGUQADEEn/4XiGbMu4YsUXiXdmaJ0QumJQvxkz0j2DKyEMPoEJ77qWlPnxPD6rQN4cdCuKIE60DfDJV+cWeQIX87w2F6FIBIXABwJQEID5b/MEnIAHQnAVbJh9yoWNwAUCQAAAWxJrEynAB4CAQATArwwCCQAECEoYkhTxZk1j4p9Q7wsxDvPT7++1vBarmcXIr+JA/3LFgADBQAAJ7UgF0kgGkYACUMgO5VFpX3Yq/DZly2DxldNywI4a7fkQE6CbBVAju1RFOAgJVFtyyZu0lvmaOgH7xQQFg/ZQ6ZJ3rhKsz3DMgkPyHcgF0kwGkYACUMgETDa5G35P62YRfcmsE1yMSWH/4LLhbvcTNG0xmcVzb4gVvWLgTX1lJXg9LO3jfttUHLdySftlTdZZsmt0lgcUF8=",
    "humanReadable": \[
      {
        "31": "AB8FAAAAAA==",
        "32": "ACACAA==",
        "33": "ACEDE5M=",
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mtU6WiruKmZczythtdNDrowLH7tP567mxLY8rsAdigmavAFotBHaFg6FmeKKp6BoxPw7QrJ5hn6Ruq6Nrbk6xFoyR"
          }
        ],
        "previousHash": "1N9cjSYn1WowWTWNR3pRDf2Dg8NwYCE5LcE1HqEbz5jEKhP",
        "rssi": -71,
        "index": 9219,
        "bridgeHashSet": [
          "1N9cjSYn1WowWTWNR3pRDf2Dg8NwYCE5LcE1HqEbz5jEKhP"
        ]
      },
      {
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mqnJsrCejQYB55bjiSpxgwhwQJB9eeD3mgAe1ZJE2z944SgNc5eh2JHLQSMc8zTccP9PgSmS94hozbnT2igPqXdpY"
          }
        ],
        "gps": {
          "lat": 36.030448889393384,
          "lng": -86.78722933874165
        },
        "date": 1564604124327,
        "rssiAt1m": 1,
        "rssi": -68,
        "previousHash": "1N9cjSYn1WowWTWNR3pRDf2Dg8NwYCE5LcE1HqEbz5jEKhP",
        "index": 10165
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIDuVRaV92Kvw2Zctg8ZXTcsCOGu35EBOgmwVQI7tURTgICVRbcsmbtJb5mjoB+8UEBYP2UOmSd64SrM9wzIJD8h3"
          }
        ]
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIBEw2uRt+T+tmEX3JrBNcjElh/+Cy4W73EzRtMZnFc2+IFb1i4E19ZSV4PSzt437bVBy3ckn7ZU3WWbJrdJYHFBf"
          }
        ]
      }
    ]
  },
]
```

### Blocks Query JSON Request

`blocks:LIMIT`

JSON Query

```json
{
  "select": {
    "name": "SELECTOR_PAGE",
    "config": {
      "limit": "40"
    }
  },
  "mutate": {
    "name": "MUTATOR_HUMAN",
    "config": {}
  },
  "payment": {
    "apiKey": "key"
  }
}
```


### Blocks Query JSON Response

( 1 of 40 example) **_This query output can also be fetched by a cURL request_**

```json
[
  {
    "signedHash": "1N9rfLHd36Djthbch281QccQ7xz7cf85ssK27ZvZrdcbooG",
    "bytes": "YAIB7GAVALAwGUQADEFe5hguCgDlvZeuFv9HtNNJuiGZEO6l/ktf2TCqVBmilhuP5x9G5I2zM+nvuaTAKo29Zptm4lAwE/H+De524SG6AB8FAAAAAAAgAgAAIQMTkzAIJAAQIY9d/vEHjPkZSnTiC3T2+/f15F6LRjMYfl2Kwa4kz97OABMC0QADBQAAC0JwBgAlABAhj13+8QeM+RlKdOILdPb79/XkXotGMxh+XYrBriTP3s4gFaAgGUQADEFVrdOGuPYbz+xRcxmSbBTiEVpQYDZyt/TeE+HKH/BP5u43UQR2galkkxz9eF9Lf5q0MSGj3lk9D9eYOHqrLmlHIBIXABwJQEHrrmy6Zu4AHQlAYXY5NV1wUwAUCQAAAWq4naYlAB4CAQATAtgwCCQAECG4dfPC9W9UFkRywolMeAYuVaSkLueA9GGRuukwSrAcQQADBQAABVsgF0kgGkYACUMgfgnvcYvRy3/s2S1oqufIubh9yTEqj5qqDAzb5qDuC40gPs/1ID6+7iUutd86tna6ppjNWJFYEEFw5Q8282wU5y4gF0kwGkYACUMgm9OOInwdEtsku4aFDUVYWtMrcIL4ddznwHjqBc2n/kQgbfXW807SgNfJLhqs++zZE9phZFaYPSI2/bHAYCt+w6Q=",
    "humanReadable": \[
      {
        "31": "AB8FAAAAAA==",
        "32": "ACACAA==",
        "33": "ACEDE5M=",
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mrsyLdX4Y1SkCUX9jHrijVizBUgTSqM5syPkGztTd7reHCgwdPdbr298rXSHN1kkcUe6LEn9GXaouxnMM5Uz7yKCu"
          }
        ],
        "previousHash": "1N9jfSkUc63YNJYTcUUMV6TGaTxFx7S95EXuurzqR5XoCtd",
        "rssi": -47,
        "index": 2882,
        "bridgeHashSet": [
          "1N9jfSkUc63YNJYTcUUMV6TGaTxFx7S95EXuurzqR5XoCtd"
        ]
      },
      {
        "keySet": [
          {
            "name": "secp566k1PublicKey",
            "value": "15mrhHEzeWKotrH6Ae2SGqu8vXmCaxNBzePQzGDB6wU71kTQNFqohDmpRkKNeqc3PRbaWHrakcwK3Jr48qqzvEWxkuk"
          }
        ],
        "gps": {
          "lat": 35.84126051999725,
          "lng": 139.69448345422515
        },
        "date": 1557875500581,
        "rssiAt1m": 1,
        "rssi": -40,
        "previousHash": "1N9nRreqJw7AQ77PRoVnCctH6usnxTdmuqRMT8t4FDGVn5v",
        "index": 1371
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIH4J73GL0ct/7NktaKrnyLm4fckxKo+aqgwM2+ag7guNID7P9SA+vu4lLrXfOrZ2uqaYzViRWBBBcOUPNvNsFOcu"
          }
        ]
      },
      {
        "signatureSet": [
          {
            "name": "secp566k1Signature",
            "value": "AAlDIJvTjiJ8HRLbJLuGhQ1FWFrTK3CC+HXc58B46gXNp/5EIG311vNO0oDXyS4arPvs2RPaYWRWmD0iNv2xwGArfsOk"
          }
        ]
      }
    ]
  },
]
```

## Plugins

Plugins from our node app present additional views that allow the user to see reports, make payments for queries, and view current rewards (rewards in Beta)

<h1 align="left">
  <img alt="plugins page view" src="/docs/assets/plugins_view.png">
</h1>

### Available plugins

- Summary
    - Shows the collection summary of a node
- Payment 
    - Allows you to buy credits with XYO 
- Daily Reports
    - View network status and rankings
- Rewards
    - View node network rewards

## Watchlist

The watchlist is a view of all devices linked to an account that is logged into XYO Explore 

<h1 align="left">
  <img alt="watchlist page view" src="/docs/assets/watchlist_view.png">
</h1>

Public keys per device are available and when clicked in this view execute a `chain` query

Clicking on **Add Alias** will allow the user to update a device with an alias instead of public key for the purpose of queries and watchlist view


## Other UI Elements to look for

<h1 align="left">
  <img alt="additional ui page view" src="/docs/assets/additional_ui_view.png">
</h1>

Under the Query field are six additional clickable elements that link directly to plugin views, map views, recent block query, and watchlist

- Total Bound Witness and Witnessess/Min
    - Takes the user to the `summary` plugin view 

- World Map
    - Takes the user to a heat map of node activity in the network

<h1 align="left">
  <img alt="world map view" src="/docs/assets/world_map_view.png">
</h1>

- Recent Blocks 
    - Takes the user to the `recent` blocks map view

- Plugins 
    - Takes the user to the available plugins page

- Watchlist 
    - Takes the user to the node/device watchlist page
