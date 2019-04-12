const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require("./controllers/FileController");

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);

module.exports = routes;

//Define as rotas
//Middleware é uma função que recebe ou modifica uma resposta. Ele é um interceptador, onde pega a requisição feita para a rota e a
//modifica de alguma maneira.
//req representa requisição feita ao servidor
//res representa a resposta que será dada ao cliente.
// routes.get('/teste', (req, res) => {
//     return res.send('Hello Rocket');
// });

