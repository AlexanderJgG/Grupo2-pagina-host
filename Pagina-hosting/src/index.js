//LLamada a los paquetes
const express   = require("express")
const mongoose  = require("mongoose")
const pago      = require("./routes/pago")
const cuentas   = require("./routes/cuentas")
const tecnico   = require("./routes/tecnico")
const uso       = require("./routes/uso")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const path = require("path")


require("dotenv").config()

//Configuraciones
const app = express();
const puerto = 9000;
const swaggerConf = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Documentos de api de cuentas",
            version: "1.0.0"
        },
        servers:[
            {
                url: "http://localhost:9000"
            }
        ]
    },
    apis: [` ${path.join(__dirname, "./routes/*.js")} `]
}


//Rutas
app.use("/api1", pago);
app.use("/api2", cuentas);
app.use("/api3", tecnico);
app.use("/api4", uso);
app.use(express.json());
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerConf)));


//Ejecución
mongoose.connect(process.env.mongodb_conexion)
    .then(() => { console.log("Conexión Realizada")})
    .catch((error) => { console.log(error)})

app.listen(puerto, () => { console.log("Servidor escuchando en el puerto"+puerto)})