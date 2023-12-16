const mongoose = require("mongoose");

const tecnicoModel = mongoose.Schema({
    correo:{
        type: String,
        required: true
    },
    reporte:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("tecnico", tecnicoModel)