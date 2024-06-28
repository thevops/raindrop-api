# Raindrop API

Raindrop API docs: https://developer.raindrop.io/

## Usage

[Example code](./src/example/example.ts)

Run:
```
RAINDROP_TOKEN=<my-token> RAINDROP_COLLECTION_ID=<number> npm run example
```

<!-- TSDOC_START -->

## :factory: Raindrop

### Methods

- [addItem](#gear-additem)
- [removeItem](#gear-removeitem)
- [getFirstItemFromCollection](#gear-getfirstitemfromcollection)

#### :gear: addItem

Add a new link to a collection.

| Method | Type |
| ---------- | ---------- |
| `addItem` | `(item: RaindropItem) => Promise<boolean>` |

Parameters:

* `item`: - The RaindropItem to add.


#### :gear: removeItem

Remove a single raindrop (item).

| Method | Type |
| ---------- | ---------- |
| `removeItem` | `(itemId: string) => Promise<boolean>` |

Parameters:

* `itemId`: - The id of the raindrop to remove.


#### :gear: getFirstItemFromCollection

Get the first item from a collection.

| Method | Type |
| ---------- | ---------- |
| `getFirstItemFromCollection` | `(collectionId: string) => Promise<{ object: RaindropItem; msg: string; status: boolean; }>` |

Parameters:

* `collectionId`: - The id of the collection.



<!-- TSDOC_END -->
