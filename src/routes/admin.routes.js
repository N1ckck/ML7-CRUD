// ************ Require's ************
const express = require('express');
const router = express.Router();
const { uploadProducts } = require("../middlewares/uploadFiles")

// ************ Controller Require ***********

const { create, store, edit, update, destroy } = require("../controllers/admin");
const { uploadProducts } = require('../middlewares/uploadFiles');
const { productValidation } = require('../middlewares/validations');

/*** CREATE ONE PRODUCT ***/
router.get('/crear-producto', create);
router.post('/crear-producto', uploadProducts.single("img"), productValidation,store);



/*** EDIT ONE PRODUCT ***/
router.get('/editar-producto/:id', edit);
router.put('/editar/:id', update);


/*** DELETE ONE PRODUCT***/
router.delete('/eliminar-producto/:id', destroy);


module.exports = router;
