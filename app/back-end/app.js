// PONEMOS EN USO TODAS LAS LIBRERIAS NPM QUE HEMOS INSTALADO
const express = require("express")
const cors = require("cors")
require("dotenv").config()

// CREAMOS APP DE MONGO Y LA FUNCION DBCONNECT PARA CONECTARNOS A MONGODB
const dbConnect = require("./config/mongo")
const app = express()
app.use(cors())
app.use(express.json())

// ROUTE COMMERCES 
// Asignamos a la ruta /api/comercio el route de comercios que hemos creado en la carpeta routes
const commerceRoute = require("./routes/comercios")
app.use("/api/comercio", commerceRoute)

// ASIGNAMOS EL PUERTO
// Usamos el puerto que hemos definido en el .env para escuchar las peticiones desde este
const port = process.env.PORT

// Usamos la funcion listen para que el server escuche al puerto y se conecte a la base de datos
app.listen(port, () => {
    dbConnect()
})
