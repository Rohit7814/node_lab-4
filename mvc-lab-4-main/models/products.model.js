const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    product_name: String,
    product_category: String,
    product_price: Number,
    product_country_of_origin: String 
})

productSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;