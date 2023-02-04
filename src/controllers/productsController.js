const ProductsModel = require("../models/productsModel");

//create
exports.createProduct=(req, res ) =>{
    let reqBody = req.body;

    ProductsModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "Failed to create product" , data: err})
        }
        else{
            res.status(201).json({status: "Created product", data: data})
        }
    })
}

//Read
exports.readProduct=(req, res)=>{
    
    ProductsModel.find( (err, data)=>{
        if(err){
            res.status(400).json({status: "Failed to read product", data: err})
        }
        else{
            res.status(200).json({status: "Success to read product", data: data})

        }
    })
}

// Read By ID
exports.readProductByID=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    ProductsModel.find(Query, (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// Update
exports.updateProduct=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id}
    let reqBody = req.body;

    ProductsModel.updateOne(Query, reqBody, (err, data) =>{
        if(err){
            res.status(400).json({status: "Failed to update product", data: err})
        }
        else{
            res.status(200).json({status: "Updated product", data: data})

        }
    })
}

// Delete
exports.deleteProduct=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id};

    ProductsModel.remove(Query, (err, data) =>{
        if(err){
            res.status(400).json({status: "Failed to delete product", data: err})
        }
        else{
            res.status(200).json({status: "Successfully Deleted product", data: data})


        }
    })
}