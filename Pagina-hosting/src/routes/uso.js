const express = require("express")
const router = express.Router();
const usoModel = require("../models/uso");

/**
 * @swagger
 * components:
 *  schemas:
 *      uso:
 *          type: object
 *          properties:
 *              username:
 *                  type: String
 *                  description: apodo del usuario
 *              tiempoUso:
 *                  type: String
 *                  description: tiempo de estancia en la pagina
 *          required:
 *              - username
 *              - tiempoUso
 *          example:
 *              username: Rub_1564
 *              tiempoUso: 60 minutos
 */

/**
 * @swagger
 * /api4/uso:
 *  get:
 *      summary: Lista todas los tiempos de uso
 *      tags: [uso]
 *      responses:  
 *          200:
 *              description: tiempos de usos mostradas correctamente
 *              content: 
 *                  application/json:
 *                      schemas:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/uso'
 */

/**
 * @swagger
 * /api4/uso/{id}:
 *  get:
 *      summary: Lista de tiempo de uso de la pagina por id
 *      tags: [uso]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id del tiempo de uso de la pagina a buscar
 *      responses:
 *          200:
 *              description: tiempo de uso de la pagina fue encontrado
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/uso'
 *          404:
 *              description: no existe el tiempo de uso de la pagina consultado
 */

/**
 * @swagger
 * /api4/uso:
 *  post:
 *      summary: Lista de un tiempo de uso de la pagina por id
 *      tags: [uso]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/uso'
 *      responses:
 *          200:
 *              description: tiempo de uso de la pagina guardado
 */

/**
 * @swagger
 * /api4/uso/{id}:
 *  put:
 *      summary: Actualizar tiempo de uso de la pagina por id
 *      tags: [uso]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id del tiempo de uso de la pagina a actualizar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/uso'
 *      responses:
 *          200:
 *              description: tiempo de uso de la pagina actualizado
 *          404:
 *              descrpition: tiempo de uso de la pagina no encontrado
 */

/**
 * @swagger
 * /api4/uso/{id}:
 *  delete:
 *      summary: Eliminar tiempo de uso de la pagina por id
 *      tags: [uso]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id del tiempo de uso de la pagina a eliminar
 *      responses:
 *          200:
 *              description: tiempo de uso de la pagina eliminado
 *          404:
 *              descrpition: tiempo de uso de la pagina no encontrado
 */



//get
router.get("/uso", (req, res) => { 
    usoModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//get con id
router.get("/uso/:id",(req, res) => { 
    const {id} = req.params;
    usoModel.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//post
router.post("/uso", (req, res) => { 
    const uso = usoModel(req.body);
    uso.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//put
router.put("/uso/;id", (req, res) => { 
    const {id} = req.params;
    const {username, tiempoUso} = req.body;
    usoModel.updateOne({_id:id}, {set:{username, tiempoUso}})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//delete
router.delete("/uso/:id",(req, res) => { 
    const {id} = req.params;
    usoModel.deleteOne({_id:id})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.jason({mensaje: error}))
});

module.exports = router;