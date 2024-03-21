// CONTROLLER PARA COMERCIOS
const { matchedData } = require("express-validator")
const { commerceModel } = require("../models/index")
const { handleHttpError } = require("../utils/handleError")

const getItems = async (req, res) => {
    try {
        const data = await commerceModel.find({})
        res.send(data)
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS_COMMERCE")
    }
}

const createItem = async (req, res) => {
    try {
        // Necesitamos el validator de comercios para hacer matchedData
        const { body } = matchedData(req)
        const data = await commerceModel.create(body)
        res.send(data)
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM_COMMERCE")
    }
}



module.exports = { createItem }
