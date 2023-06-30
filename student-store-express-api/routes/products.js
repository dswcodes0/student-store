const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
    const products = await Store.products()
    res.status(200).json({products})
})

module.exports = router
