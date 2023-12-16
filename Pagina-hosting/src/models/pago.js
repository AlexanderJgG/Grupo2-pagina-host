const mongoose = require("mongoose");

const pagoModel = mongoose.Schema({
    correo:{
        type: String,
        required: true
    },
    servicio:{
        type: String,
        required: true
    },
    numeroTarjeta:{
        type: String,
        required: true
    },
    fechaVencimiento:{
        type: String,
        required: true
    },
    codigoSeguridad:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("pago", pagoModel)