// CONTROLLER PARA COMERCIOS
const { commerceModel } = require("../models/index")

const createItem = async (req, res) => {
    const { body } = req
    const data = await commerceModel.createItem(body)
    res.send(data)
}

module.exports = { createItem }
