import jwt from "jsonwebtoken";
import UserSchema from "../modal/User.schema.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body.userData;
        if (!name || !email || !password || !confirmPassword) {
            return res.send("All fields are required.")
        }

        if (password != confirmPassword) {
            return res.send("Password and confirm password not matched.")
        }

        const isEmailExist = await UserSchema.find({ email: email })

        if (isEmailExist.length) {
            return res.send("Email is exist.")
        }

        const hashedPassword = await bcrypt.hashSync(password, 10)
        // console.log(hashedPassword, password)

        const user = new UserSchema({
            name: name,
            email: email,
            password: hashedPassword
        })
        await user.save()
        return res.json({ message: 'User stored successfully.', success: true })
    } catch (error) {
        return res.status(500).json({ error })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body.loginData;
        if (!email || !password) {
            return res.status(401).json({ success: false, message: "Email and password both are required." })
        }

        const user = await UserSchema.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not exists." })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(404).json({ success: false, message: "Password is incorrect." })
        }

        const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
        // console.log(token,"token")
        return res.status(200).json({ success: true, message: "Login successfull.", token: token, user: { userId: user._id, name: user.name, email: user.email } })

    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            return res.status(404).json({ success: false, message: "Token is mandatory." })
        }
        const decodedData = await jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decodedData.userId, "decoeded data")

        const user = await UserSchema.findById(decodedData.userId)
        // console.log(user,"user")
        if (!user) {
            return res.status(404).json({ success: false })
        }
        return res.json({ success: true, user: { name: user.name, email: user.email, userId: user._id } })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}