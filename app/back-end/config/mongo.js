const mongoose = require("mongoose")
const dbConnect = () => {
    const db_url = process.env.DB_URL
    mongoose.set("strictQuery", false)
    try {
        mongoose.connect(db_url)
    } catch (err) {
        console.err("Error conectando a la BD: ", err)
    }

    mongoose.connection.on("connected", () => console.log("Conectado a la BD"))
}

module.exports = dbConnect
