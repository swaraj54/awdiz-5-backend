import UserSchema from "../modal/User.schema.js";

export const addCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        if (!productId || !userId) {
            return res.status(400).json({ success: false, message: "User and product both are required." })
        }
        const user = await UserSchema.findById(userId);
        if (!user) {
            return res.status(400).json({ success: false, message: "User not exists." })
        }
        const isProductExist = user?.cart.find((id) => id == productId)
        if (isProductExist) {
            return res.status(400).json({ success: false, message: "Product already exists in cart." })
        }
        user?.cart.push(productId);
        await user.save();
        return res.status(200).json({ success: true, message: "Product successfully added to cart." })

    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
}


export const readCart = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User is required." })
        }
        const user = await UserSchema.findById(userId).populate('cart');
        if (!user) {
            return res.status(400).json({ success: false, message: "User not exists." })
        }
        console.log(user, "user")
        return res.status(200).send({ success: true, cart: user.cart, message: "Porduct successfully fetched." })

    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
}


