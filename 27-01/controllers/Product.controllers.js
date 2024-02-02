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