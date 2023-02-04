const express = require('express');
const {createProduct, readProduct , updateProduct , deleteProduct, readProductByID } = require("../controllers/productsController")
const router = express.Router();

//Api Routing End Point
router.post('/createProduct', createProduct)
router.get('/readProduct', readProduct)
router.get('/readProductByID/:id', readProductByID)
router.post('/updateProduct/:id', updateProduct)
router.get('/deleteProduct/:id', deleteProduct)



module.exports=router;