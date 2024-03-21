// MANEJO DE ERRORES
const handleHttpError = (res, message, code = 403) => {
    res.status(code).send(message)
}

module.exports = handleHttpError
