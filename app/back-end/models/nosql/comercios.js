// MODELO DEL COMERCIO
const mongoose = require("mongoose")

const CommerceScheme = new mongoose.Schema(
{
    nombre: {
        type: String
    },
    cif: {
        type: String,
        unique: true
    },
    direccion: {
        type: String
    },
    mail: {
        type: String
    },
    telefono: {
        type: String
    },
    id: {
        type: Number,
        unique: true
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model("comercio", CommerceScheme)
