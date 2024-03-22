// ROUTE COMERCIOS
const express = require("express")
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/comercios")
const router = express.Router()
const { validatorCreateCommerce, validatorCIFCommerce, validatorUpdateCommerce } = require("../validators/comercios")

router.get("/", getItems)

router.get("/:cif", validatorCIFCommerce, getItem)

router.post("/", validatorCreateCommerce, createItem)

router.patch("/:cif", validatorUpdateCommerce, updateItem)

router.delete("/:cif", validatorCIFCommerce, deleteItem)


module.exports = router
