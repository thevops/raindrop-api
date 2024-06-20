import { Raindrop } from "../index";

const raindroip_token = process.env.RAINDROP_TOKEN || "";
const raindrop_collection_id = process.env.RAINDROP_COLLECTION_ID || "";

if (!raindroip_token || !raindrop_collection_id) {
  throw new Error(
    "Please provide RAINDROP_TOKEN and RAINDROP_COLLECTION_ID environment variables.",
  );
}

const raindrop = new Raindrop(raindroip_token);

raindrop
  .addItem_link(raindrop_collection_id, "https://www.google.com")
  .then((result) => {
    console.log("addItem_link:", result);

    raindrop
      .getFirstItemFromCollection(raindrop_collection_id)
      .then((result) => {
        console.log("getFirstItemFromCollection:", result);
        const itemId = result.object._id;

        raindrop.removeItem(itemId.toString()).then((result) => {
          console.log("removeItem:", result);
        });
      });
  });
