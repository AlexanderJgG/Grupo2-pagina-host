const express = require("express")
const router = express.Router();
const tecnicoModel = require("../models/tecnico");

/**
 * @swagger
 * components:
 *  schemas:
 *      tecnico:
 *          type: object
 *          properties:
 *              correo:
 *                  type: String
 *                  description: correo del usuario
 *              reporte:
 *                  type: String
 *                  description: reporte de errores
 *          required:
 *              - correo
 *              - reporte
 *          example:
 *              correo: alonso@gmail.com
 *              reporte: Precios: los precios estan muy desbalanceados.
 */

/**
 * @swagger
 * /api3/tecnico:
 *  get:
 *      summary: Lista todas los reportes tecnicos
 *      tags: [tecnico]
 *      responses:  
 *          200:
 *              description: pagos mostradas correctamente
 *              content: 
 *                  application/json:
 *                      schemas:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/tecnico'
 */

/**
 * @swagger
 * /api3/tecnico/{id}:
 *  get:
 *      summary: Lista de un reporte tecnico por id
 *      tags: [tecnico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: id del reporte tecnico a buscar
 *      responses:
 *          200:
 *              description: reporte tecnico fue encontrado
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/tecnico'
 *          404:
 *              description: no existe el reporte tecnico consultado
 */

/**
 * @swagger
 * /api3/tecnico:
 *  post:
 *      summary: Lista de un reporte tecnico por id
 *      tags: [tecnico]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/tecnico'
 *      responses:
 *          200:
 *              description: reporte tecnico guardado
 */

/**
 * @swagger
 * /api3/tecnico/{id}:
 *  put:
 *      summary: Actualizar reporte tecnico por id
 *      tags: [tecnico]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id del reporte tecnico a actualizar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  item:  
 *                      $ref: '#components/schemas/tecnico'
 *      responses:
 *          200:
 *              description: reporte tecnico actualizado
 *          404:
 *              descrpition: reporte tecnico no encontrado
 */

/**
 * @swagger
 * /api3/tecnico/{id}:
 *  delete:
 *      summary: Eliminar reporte tecnico por id
 *      tags: [tecnico]
 *      parameters:   
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: id del reporte tecnico a eliminar
 *      responses:
 *          200:
 *              description: reporte tecnico eliminado
 *          404:
 *              descrpition: reporte tecnico no encontrado
 */


//get
router.get("/tecnico", (req, res) => { 
    tecnicoModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//get con id
router.get("/tecnico/:id",(req, res) => { 
    const {id} = req.params;
    tecnicoModel.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.jason({mensaje: error}))
});

//post
router.post("/tecnico", (req, res) => { 
    const tecnico = tecnicoModel(req.body);
    tecnico.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//put
router.put("/tecnico/;id", (req, res) => { 
    const {id} = req.params;
    const {correo, reporte} = req.body;
    pagoModel.updateOne({_id:id}, {set:{correo, reporte}})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.jason({mensaje: error}))
});

//delete
router.delete("/tecnico/:id",(req, res) => { 
    const {id} = req.params;
    tecnicoModel.deleteOne({_id:id})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.jason({mensaje: error}))
});

module.exports = router;