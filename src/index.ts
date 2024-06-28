export interface RaindropItem {
  link: string; // required
  _id?: number;
  excerpt?: string;
  note?: string;
  type?: string;
  user?: { $ref: string; $id: number };
  cover?: string;
  tags?: string[];
  removed?: boolean;
  collection?: { $id: number };
  media?: string[];
  domain?: string;
  created?: string;
  lastUpdate?: string;
  title?: string;
  creatorRef?: { _id: number; name: string; avatar: string; email: string };
  sort?: number;
  highlights?: string[];
}

export class Raindrop {
  private readonly raindrop_url: string = "https://api.raindrop.io/rest/v1";
  private raindroip_token: string;

  constructor(raindroip_token: string) {
    this.raindroip_token = raindroip_token;
  }

  /**
   * Add a new link to a collection.
   * @param item - The RaindropItem to add.
   * @return Promise<boolean> - True if the item was added successfully, false otherwise.
   */
  public async addItem(item: RaindropItem): Promise<boolean> {
    try {
      const response = await fetch(`${this.raindrop_url}/raindrop`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.raindroip_token}`,
        },
        body: JSON.stringify(item),
      });
      if (response.status == 200) {
        await response.json();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * Remove a single raindrop (item).
   * @param itemId - The id of the raindrop to remove.
   * @return Promise<boolean> - True if the raindrop was removed successfully, false otherwise.
   */
  public async removeItem(itemId: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.raindrop_url}/raindrop/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.raindroip_token}`,
        },
      });
      if (response.status == 200) {
        await response.json();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * Get the first item from a collection.
   * @param collectionId - The id of the collection.
   * @return Promise<{ object: RaindropItem; msg: string; status: boolean }> - The first item in the collection, along with a message and status.
   */

  public async getFirstItemFromCollection(
    collectionId: string
  ): Promise<{ object: RaindropItem; msg: string; status: boolean }> {
    try {
      const response = await fetch(
        `${this.raindrop_url}/raindrops/${collectionId}`,
        {
          headers: {
            Authorization: `Bearer ${this.raindroip_token}`,
          },
        }
      );
      if (response.status !== 200) {
        return {
          object: Object.create(null) as RaindropItem,
          msg: "Response code not 200",
          status: false,
        };
      }
      const data = await response.json();

      // Get first item
      const first_item = data.items.pop();
      if (!first_item) {
        return {
          object: Object.create(null) as RaindropItem,
          msg: "No items found",
          status: false,
        };
      }

      // Return item
      return { object: first_item, msg: "Success", status: true };
    } catch (error) {
      return {
        object: Object.create(null) as RaindropItem,
        msg: "Error fetching data",
        status: false,
      };
    }
  }
}
