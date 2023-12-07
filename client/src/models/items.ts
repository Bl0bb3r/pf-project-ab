import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Item } from "../pages/Shopping/Item.model";
import axios from "axios";

const fetchItems = async () => {
  const response = await axios.get("http://localhost:5000/api/shoppinglist");
  return response.data;
};

// using axios call to post new item into DB - any post made on this specific api - calls backend function in backends ItemController.js
const addItemInDb = async (name: string, quantity: number) => {
  await axios.post("http://localhost:5000/api/shoppinglist", {
    name,
    quantity,
    date: Math.round(new Date().getTime() / 1000),
  });
};

export const items = createModel<RootModel>()({
  state: [] as ReadonlyArray<Item>,
  reducers: {
    loaded: (state, payload: ReadonlyArray<Item>) => payload,
  },
  effects: (dispatch) => ({
    loadAsync: async () => {
      const payload = await fetchItems();
      // sort of hack needs explaining -> the mui data-grid requires a unique id, but we want to avoid adding that in the model,
      // since mongoDB adds a document unique _id to all documents added in the database. (In MongoDB language a document is any object eg. json or in this case 1 item)
      dispatch.items.loaded(payload.map((r: any) => ({ ...r, id: r._id })));
    },
    addItem: async (payload: { name: string; quantity: number }) => {
      await addItemInDb(payload.name, payload.quantity);
      dispatch.items.loadAsync();
    },
  }),
});
