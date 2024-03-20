const express = require("express")
const cors = require("cors")
require("dotenv").config()

// CREAMOS APP DE MONGO
const dbConnect = require("./config/mongo")
const app = express()
app.use(cors())
app.use(express.json())

// ROUTE COMMERCES
const commerceRoute = require("./routes/comercios")
app.use("/api/comercio", commerceRoute)

const port = process.env.PORT

app.listen(port, () => {
    dbConnect()
})
