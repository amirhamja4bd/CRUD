const mongoose =require("mongoose");

 const dataSchema = mongoose.Schema({
    productName:{type:"string",},
    productCode:{type:"string",},
    img:{type:"string",},
    unitPrice:{type:"string",},
    qty:{type:"string",},
    totalPrice:{type:"string",}

 }, { timestamps: true, versionKey: false })

 const ProductsModel = mongoose.model("Products", dataSchema);
 module.exports=ProductsModel;
