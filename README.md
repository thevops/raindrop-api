# Raindrop API

Raindrop API docs: https://developer.raindrop.io/

## Usage

[Example code](./src/example/example.ts)

<!-- TSDOC_START -->

## :factory: Raindrop

### Methods

- [addItem_link](#gear-additem_link)
- [removeItem](#gear-removeitem)
- [getFirstItemFromCollection](#gear-getfirstitemfromcollection)

#### :gear: addItem_link

Add a new link to a collection.

| Method | Type |
| ---------- | ---------- |
| `addItem_link` | `(collectionId: string, link: string) => Promise<boolean>` |

Parameters:

* `collectionId`: - The id of the collection.
* `link`: - The link to add.


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
