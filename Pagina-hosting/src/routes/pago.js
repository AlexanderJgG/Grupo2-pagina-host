const express = require("express")
const router = express.Router();
const pagoModel = require("../models/pago");

/**
 * @swagger
 * components:
 *  schemas:
 *      pago:
 *          type: object
 *          properties:
 *              correo:
 *                  type: String
 *                  description: correo del usuario
 *              servicio:
 *                  type: String
 *                  description: plan hosting
 *              numeroTarjeta:
 *                  type: String
 *                  description: numero de la tarjeta
 *              fechaVencimiento:
 *                  type: String
 *                  description: fecha del vencimiento de la tarjeta
 *              codigoSeguridad:
 *                  type: Number
 *                  description: codigo de seguridad de la tarjeta
 *          required:
 *              - correo
 *              - servicio
 *              - numeroTarjeta
 *              - fechaVencimiento
 *              - codigoSeguridad
 *          example:
 *              correo: alonso@gmail.com
 *              servicio: empresarial
 *              numeroTarjeta: 4249 9151 1830 3452
 *              fechaVencimiento: 02/24
 *              codigoSeguridad: 251
 */

/**
 * @swagger
 * /api1/pago:
 *  get:
 *      summary: Lista todas los pagos
 *      tags: [pago]
 *      responses:  
 *          200:
 *              description: pagos mostradas correctamente
 *              content: 
 *                  application/json:
 *                      schemas:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/pago'
 */

/**
 * @swagger
 * /api1/pago/{id}:
 *  get:
 *      summary: Lista de un pago por id
 *      tags: [pago]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id del pago a buscar
 *      responses:
 *          200:
 *              description: pago fue encontrada
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/pagos'
 *          404:
 *              description: no existe el pago consultado
 */

/**
 * @swagger
 * /api2/pago:
 *  post:
 *      summary: Lista de un pago por id
 *      tags: [cuentas]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/pago'
 *      responses:
 *          200:
 *              description: Pago guardado
 */

/**
 * @swagger
 * /api1/pago/{id}:
 *  put:
 *      summary: Actualizar pago por id
 *      tags: [pago]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id del pago a actualizar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/pago'
 *      responses:
 *          200:
 *              description: cuenta actualizada
 *          404:
 *              descrpition: cuenta no encontrada
 */

/**
 * @swagger
 * /api1/pago/{id}:
 *  delete:
 *      summary: Eliminar pago por id
 *      tags: [pago]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id del pago a eliminar
 *      responses:
 *          200:
 *              description: pago eliminada
 *          404:
 *              descrpition: pago no encontrada
 */

//get
router.get("/pago", (req, res) => { 
    pagoModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//get con id
router.get("/pago/:id",(req, res) => { 
    const {id} = req.params;
    pagoModel.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//post
router.post("/pago", (req, res) => { 
    const pago = pagoModel(req.body);
    pago.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//put
router.put("/pago/;id", (req, res) => { 
    const {id} = req.params;
    const {correo, servicio, numeroTarjeta, fechaVencimiento, codigoSeguridad} = req.body;
    pagoModel.updateOne({_id:id}, {set:{correo, servicio, numeroTarjeta, fechaVencimiento, codigoSeguridad}})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//delete
router.delete("/pago/:id",(req, res) => { 
    const {id} = req.params;
    pagoModel.deleteOne({_id:id})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.jason({mensaje: error}))
});

module.exports = router;