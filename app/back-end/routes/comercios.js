// ROUTE COMERCIOS
const express = require("express")
const { createItem } = require("../controllers/comercios")
const router = express.Router()

router.post("/", createItem)

module.exports = router
