// ROUTE COMERCIOS
const express = require("express")
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/comercios")
const router = express.Router()
const { validatorCreateCommerce, validatorCIFCommerce } = require("../validators/comercios")

router.get("/all", getItems)

router.get("/all/:CIF", getItem)

router.post("/", validatorCreateCommerce, createItem)

router.patch("/update/:CIF", updateItem)

router.delete("/delete/:CIF", deleteItem)


module.exports = router
