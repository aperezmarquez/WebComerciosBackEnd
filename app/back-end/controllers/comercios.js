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
        const { body } = req
        const data = await commerceModel.create(body)
        res.send(data)
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM_COMMERCE")
    }
}

const getItem = async (req, res) => {
    try {
        const CIF = req.params.CIF
        const data = await commerceModel.findOne({CIF:CIF})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM_COMMERCE")
    }
}

const updateItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const CIF = req.params.CIF
        const data =  await commerceModel.findOneAndUpdate({CIF:CIF}, body)
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM_COMMERCE")
    }
}

const deleteItem = async (req, res) => {
    try {
        const CIF = req.params.CIF
        const data = await commerceModel.delete({CIF:CIF})
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM_COMMERCE")
    }
}


module.exports = { getItems, createItem, getItem, updateItem, deleteItem }
