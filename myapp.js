
const express = require("express")
const app = express()
const productRouter = require("./router/products.router")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/product", productRouter)
// app.use("/p", productRouter)
// app.all('/test',(req, res)=>{
//     console.log(res)
    
//     // .then((result)=>{
//     //     console.log(result)
//     // })
//     // .catch((err)=>{
//     //     console.log(err.message)
//     // })
    
// })
const mongoose = require("mongoose")
const url = "mongodb+srv://aze:aze@cluster0.g3bix0m.mongodb.net/product"
mongoose.connect(url , {
    // DB_Name : "product",
    // user : "aze",
    // pass : "aze",
    useNewUrlParser: true, 
    useUnifiedTopology: true}).then(()=>{
    console.log("mongodb well conected")
})
.catch((err)=>{
    console.log(err)
})






app.listen(3000, ()=>{
    console.log("server start at 3000")
})