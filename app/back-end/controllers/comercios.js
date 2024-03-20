// CONTROLLER PARA COMERCIOS
const { matchedData } = require("express-validator")
const { commerceModel } = require("../models/index")

const createItem = async (req, res) => {
    const { body } = req
    const data = await commerceModel.create(body)
    res.send(data)
}

module.exports = { createItem }
