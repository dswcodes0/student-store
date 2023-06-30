const express = require('express')
const morgan = require('morgan')
const app = express()
const products = require("./routes/products")
const product = require("./routes/product")

app.use(morgan("tiny"))
app.use("/products", products)
app.use("/product", product)

app.get('/', async (req, res) =>{
    res.json({ping: "pong"})
})


module.exports = app