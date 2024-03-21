// ROUTE COMERCIOS
const express = require("express")
const { createItem } = require("../controllers/comercios")
const router = express.Router()
const { validatorCreateCommerce } = require("../validators/comercios")

router.post("/", validatorCreateCommerce, createItem)

module.exports = router
