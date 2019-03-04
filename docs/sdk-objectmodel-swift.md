---
id: SDK-ObjectModel-Swift
title: SDK Object Model Swift
---

Implementation of the [XYO object model](https://github.com/XYOracleNetwork/spec-coreobjectmodel-tex/blob/new-scheme/tex/scheme.pdf) in swift.  

## Getting Started
This library is structed into 4 central objects that you may be using: 

- the buffer
- the structure
- the iterable structure
- the schema

### Buffer

The XyoBuffer class is a tool to create byte buffers so you can easily place numbers, schemas, and any other data.

#### Creating a Buffer
You can create a buffer from nothing, from another buffer, or a subset of another buffer.
```swift
let emptyBuffer = XyoBuffer() // creates an empty buffer
let byteFilledBuffer = XyoBuffer(data: [0x13, 0x37]) // creates a buffer with 0x1337 inside of it
let subBufferFromBytes = XyoBuffer(data: [0x00, 0x01, 0x02, 0x03], allowedOffset: 1, lastOffset: 3) // creates a buffer with the value 0x0102
let subBufferFromBuffer = XyoBuffer(data: XyoBuffer(...), allowedOffset: 1, lastOffset: 3) // creates a buffer with from range 1 to 2

```

#### Adding to a Buffer
After a buffer is created, you can append other data to the end of it.
```swift
let buffer = XyoBuffer()
buffer.put(schema: XyoObjectSchema(0, 0)) // puts a schema into the buffer
buffer.put(bytes: [0x13, 0x37]) // puts 0x1337 into the buffer
buffer.put(bits: UInt8(5)) // puts a single byte into the buffer
buffer.put(bits: UInt16(5)) // puts a short into the buffer
buffer.put(bits: UInt32(5)) // puts a int into the buffer
buffer.put(bits: UInt62(5)) // puts a long into the buffer
buffer.put(buffer: XyoBuffer(...)) // puts a buffer into the buffer
```

#### Getting from a Buffer
After a buffer has data in it, you can extract meaningful data from it.
```swift
let schema = buffer.getSchema(offset: 2) // gets a schema at offset 2
let number = buffer.getUInt8(offset: 2) // gets a byte at offset 2
let number = buffer.getUInt16(offset: 2) // gets a short at offset 2
let number = buffer.getUInt32(offset: 2) // gets a int at offset 2
let number = buffer.getUInt64(offset: 2) // gets a long at offset 2
let subBuffer = buffer.copyRangeOf(from: 2, to: 4) // gets a range between 2 and 4
```


### Schema

The XyoObjectSchema struct is an object used to contain information about how a certain object is encoded. A schema is broken down into two bytes, the **encoding catalogue** and the **id**. The encoding catalogue includes how large the size is, if it is iterable, if it is a typed iterable, and its id. The id is simply the id of the schema.

#### Creating a Schema
You can create a schema from an encoding catalogue and an id, from config pramaters, or from bytes.

```swift
let manualSchema = XyoObjectSchema(id : 12, encodingCatalogue : 20) // creates a schema with id 12, and encodingCatalogue 20
let configSchema = XyoObjectSchema.create(id : 12, isIterable : true, isTypedIterable: false, sizeIdentifier : XyoObjectSizes.TWO) // create an iteratble untyped schema with id 12, and a two byte size.
```

#### Reading a Schema

After a schema is created, it can be read from to obtain information about the proceding object.
```swift
let id = schema.id // gets the id
let isTyped = schema.getIsTypedIterable() // gets if the schema is typed
let isIterable = schema.getIsIterable() // gets if the schema is iterable
let sizeOfSize = schema.getSizeIdentifier() // gets the size of the size
```

### Structure

A structure is a buffer of bytes that contains a schema, a size, and a value. The XyoObjectStructure class allows for easy creation and reading of an XYO structure.

#### Creating a structure

You can create a structure from a schema and value, or another structure's bytes.
```swift
let custumSchema = XyoObjectSchema(id: 12, encodingCatalogue: 0)
let custumStructure = XyoObjectStructure.newInstance(schema: custumSchema, bytes: [0x13, 0x37]) // creates a schema with the value 0x1337

let schemaBytes : [UInt8] = [0x00, 0x01, 0x03, 0x13, 0x37]
let createdStructure = XyoObjectStructure(value: schemaBytes)
```

#### Reading a Structure

After a structure is created, you can extract the value, schema, and size from it.
```swift
let structureSchema = structure.getSchema() // gets the schema of the structure
let structureValue = structure.getValue() // gets the value of the structure
let entireStructure = structure.getBuffer() // gets the entire buffer value of the structure
let structureSize = structure.getSize() // gets the size of the buffer, not including the schema
```

### Iterable Structure

An iterable structure is a special type of structure that can be iterated over, like a linked list or array. There are two types of iterable structures, **typed** and **untyped**. Typed iterable structures are smaller, but all elements must follow a single schema. A untyped array is larger, but all of the elements do not have to share the same schema.

#### Creating a Iterable Structure

You can create a iterable structure from a buffer or from a collection of elements.
```swift
let custumSchema : XyoObjectSchema = ...
let elements : [XyoObjectStructure] = [...]
let untyped = XyoIterableStructure.encodeUntypedIterableObject(schema: custumSchema, values: elements) // creates an untyped array of the elements
let typed = XyoIterableStructure.encodeTypedIterableObject(schema: custumSchema, values: elements) // creates an typed array of the elements
let fromBytes = XyoObjectStructure(value : XyoBuffer(data: ...))
```

#### Reading from an Iterable Structure

After a iterable structure is created, you can extract all of the elements from it.

```swift
// using an iterator
let iterator = iterableStructure.getNewIterator() // gets a fresh iterator

while (try iterator.hasNext()) {
   doSomethingWithItem (try iterator.next())
}


let itemTwo = iterableStructure.get(index: 1) // gets an item at index 1
let count = iterableStructure.getCount() // gets the total number of elements (size)

// you can also get all of the elements in the structure that have an id
let groupOfElementsOfId = iterableStructure.get(id: 0x02) // will get all the elements in the set with id: 0x02
```

