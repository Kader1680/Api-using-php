const express =  require("express")
const router = express.Router()
const Product = require("../model/productModel")
const product = require("../model/productModel")


// get all product 
router.get("/allProduct", async (req, res, next)=>{
    

    try {
        const allProduct = await Product.find()

        res.send(allProduct)
        
    } catch (error) {
        console.log(error.message)
    }
})

// get a product by unique id given 
router.get("/:id", async (req, res, next)=>{
    try {
        const id = req.params.id
        const allProduct = await Product.findById(id)
        res.send(allProduct)
    } catch (error) {
        console.log(error.message)
        
    }
})

// post a new product 
router.post("/p", (req, res, next)=>{
    const product = new Product({
        Name: req.body.Name, 
        Price: req.body.Price
    })
    product.save()
    res.send("created 500")
})

router.delete("/:id", async (req, res, next)=>{
    const id = req.params.id
    const update = req.body

    const product = await Product.findByIdAndRemove(id, update)

    res.send("delete succesful 500")

})

router.patch("/:id", async (req, res, next)=>{
    const id = req.params.id
    const update = req.body
    
    const product = await Product.findByIdAndUpdate(id, update)
    res.send(product)

    res.send("update succesful 500")
})




router.delete("/deleteALLProduct", async (req, res, next)=>{
    
    const product = await Product.deleteMany()
    res.send(product)

    res.send("Delete all Product with succesful")
})


module.exports = router;