var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controlers/api/bicicletaControllerAPI');


router.get('/', bicicletaController.bicicleta_list);

module.exports = router;