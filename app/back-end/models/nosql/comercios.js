// MODELO DEL COMERCIO
const mongoose = require("mongoose")

const CommerceScheme = new mongoose.Schema(
{
    nombre: {
        type: String,
        required: true
    },
    CIF: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        unique: true,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model("comercio", CommerceScheme)
