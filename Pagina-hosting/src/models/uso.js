const mongoose = require("mongoose");

const usoModel = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    tiempoUso:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("uso", usoModel)