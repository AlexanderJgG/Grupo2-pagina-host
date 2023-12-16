const express = require("express")
const router = express.Router();
const cuentasModel = require("../models/cuentas");

/**
 * @swagger
 * components:
 *  schemas:
 *      cuentas:
 *          type: object
 *          properties:
 *              nombres:
 *                  type: String
 *                  description: nombres del usuario
 *              apellidos:
 *                  type: String
 *                  description: apellidos del usuario
 *              username:
 *                  type: String
 *                  description: apodo del usuario
 *              contraseña:
 *                  type: String
 *                  description: contraseña del usuario
 *              correo:
 *                  type: String
 *                  description: correo del usuario
 *              edad:
 *                  type: Number
 *                  description: edad del usuario
 *          required:
 *              - nombres
 *              - apellidos
 *              - username
 *              - contraseña
 *              - correo
 *              - edad
 *          example:
 *              nombres: Ruben Alonso
 *              apellidos: Rojas Camacho
 *              username: Rub_1520
 *              contraseña: 48165137da
 *              correo: alonso@gmail.com
 *              edad: 18
 */

/**
 * @swagger
 * /api2/cuentas:
 *  get:
 *      summary: Lista todas las cuentas
 *      tags: [cuentas]
 *      responses:  
 *          200:
 *              description: cuentas mostradas correctamente
 *              content: 
 *                  application/json:
 *                      schemas:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/cuentas'
 */


/**
 * @swagger
 * /api2/cuentas/{id}:
 *  get:
 *      summary: Lista de una cuenta por id
 *      tags: [cuentas]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id de la cuenta a buscar
 *      responses:
 *          200:
 *              description: cuenta fue encontrada
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/cuentas'
 *          404:
 *              description: no existe la cuenta consultada
 */

/**
 * @swagger
 * /api2/cuentas:
 *  post:
 *      summary: Lista de una cuenta por id
 *      tags: [cuentas]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/cuentas'
 *      responses:
 *          200:
 *              description: Cuenta guardada
 */

/**
 * @swagger
 * /api2/cuentas/{id}:
 *  put:
 *      summary: Actualizar cuentas por id
 *      tags: [cuentas]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id de la cuenta a actualizar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/cuentas'
 *      responses:
 *          200:
 *              description: cuenta actualizada
 *          404:
 *              descrpition: cuenta no encontrada
 */

/**
 * @swagger
 * /api2/cuentas/{id}:
 *  delete:
 *      summary: Eliminar cuentas por id
 *      tags: [cuentas]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id de la cuenta a eliminar
 *      responses:
 *          200:
 *              description: cuenta eliminada
 *          404:
 *              descrpition: cuenta no encontrada
 */

//get
router.get("/cuentas", (req, res) => { 
    cuentasModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//get con id
router.get("/cuentas/:id",(req, res) => { 
    const {id} = req.params;
    cuentasModel.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//post
router.post("/cuentas", (req, res) => { 
    const cuentas = cuentasModel(req.body);
    cuentas.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//put
router.put("/cuentas/;id", (req, res) => { 
    const {id} = req.params;
    const {nombres, apellidos, username, contraseña, correo, edad} = req.body;
    cuentasModel.updateOne({_id:id}, {set:{nombres, apellidos, username, contraseña, correo, edad}})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//delete
router.delete("/cuentas/:id",(req, res) => { 
    const {id} = req.params;
    cuentasModel.deleteOne({_id:id})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.jason({mensaje: error}))
});

module.exports = router;