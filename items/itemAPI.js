//https://expressjs.com/en/guide/routing.html

// init express router
const express = require("express");
const router = express.Router();

//import itemController
const item = require("./itemController");

router.get("/shoppinglist", item.fetchAllItems);
router.post("/shoppinglist", item.createItem);
router.delete("/shoppinglist/:id", item.removeItem);

module.exports = router;
