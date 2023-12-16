const mongoose = require("mongoose");

const cuentasModel = mongoose.Schema({
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("cuentas", cuentasModel)