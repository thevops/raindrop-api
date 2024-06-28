import { Raindrop, RaindropItem } from "../index";

const raindroip_token = process.env.RAINDROP_TOKEN || "";
const raindrop_collection_id = process.env.RAINDROP_COLLECTION_ID || "";

if (!raindroip_token || !raindrop_collection_id) {
  throw new Error(
    "Please provide RAINDROP_TOKEN and RAINDROP_COLLECTION_ID environment variables.",
  );
}

const raindrop = new Raindrop(raindroip_token);

const item: RaindropItem = {
  title: "This is a title",
  link: "https://www.google.com",
  note: "This is a note.",
  collection: {
    $id: Number(raindrop_collection_id),
  },
};

raindrop.addItem(item).then((result) => {
  console.log("addItem:", result);

  raindrop.getFirstItemFromCollection(raindrop_collection_id).then((result) => {
    console.log("getFirstItemFromCollection:", result);
    const itemId = result.object._id;

    if (!itemId) {
      throw new Error("No item found in collection.");
    }

    raindrop.removeItem(itemId.toString()).then((result) => {
      console.log("removeItem:", result);
    });
  });
});
