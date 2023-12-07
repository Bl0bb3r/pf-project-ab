// Import item model
const Item = require("./item");

const fetchAllItems = async (req, res) => {
  try {
    const items = await Item.find()
      //sort function can be -1 for descending items so newest input is top item or +1 for recieving the inputs with the oldes creation date first.
      // had -1 here until I realized I prefer the first items i write on my shopping list to be the top ones :p
      .sort({ date: +1 })
      .then((items) => res.json(items));
    res.status(200).json(items);
  } catch {
    res.status(400).end();
  }
};

const createItem = async (req, res) => {
  let newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    date: req.body.date,
  });
  console.log("CREATE ITEM: " + req.body.name);
  try {
    await newItem.save();
    res.send({ message: "Item inserted" });
    res.status(201);
  } catch (err) {
    res.send({ message: "Failed to create item: " + err.message });
    res.status(400);
  }
};

const removeItem = async (req, res) => {
  const itemId = req.query.itemId;
  try {
    await Item.deleteOne({ _id: itemId });
    res.status(204).end();
  } catch {
    res.status(404).end();
  }
};

module.exports.fetchAllItems = fetchAllItems;
module.exports.createItem = createItem;
module.exports.removeItem = removeItem;
