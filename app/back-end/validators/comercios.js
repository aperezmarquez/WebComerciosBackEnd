// VALIDATOR DE COMERCIOS
const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateCommerce = [
    check("nombre").exists().notEmpty(),
    check("CIF").exists().notEmpty(),
    check("direccion").exists().notEmpty(),
    check("mail").exists().notEmpty(),
    check("telefono").exists().notEmpty(),
    check("id").exists().notEmpty().isInt(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorCIFCommerce = [
    check("CIF").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req,res,next)
    }
]

module.exports = { validatorCreateCommerce }
