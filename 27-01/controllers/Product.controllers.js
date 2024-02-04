import ProductSchema from "../modal/Product.schema.js";

export const addProduct = async (req, res) => {
    try {
        const { name, quantity, price, image, category } = req.body.productData;
        // console.log(name, quantity, price, image, category)


        const product = new ProductSchema({
            name: name, quantity: quantity, price, image, category
        })

        // console.log(product,"product here")
        await product.save();

        return res.status(201).json({ success: true, message: "Product successfully created." })

    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}

export const readProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find({})
        return res.status(200).json({ products: products, success: true })
    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}

export const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await ProductSchema.findById(productId);

        if (product) {
            return res.status(200).json({ success: true, product })
        }
        return res.status(401).json({ success: false, message: "Product not found." })

    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}