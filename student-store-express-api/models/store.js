const { storage } = require("../data/storage")

class Store{
    static async products(){
        const products = storage.get("products").value()
        return products
    }

    static async product(productId){
        const product = storage.get("products").find({ id: Number(productId)}).value()
        return product
    }
}

module.exports = Store