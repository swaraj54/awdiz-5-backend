import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    image: [String]
})

export default mongoose.model("Product", productSchema)