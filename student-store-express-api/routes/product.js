const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/:productId", async (req, res, next) => {
    const product = await Store.product(req.params.productId)
    res.status(200).json({product})
})

module.exports = router
