import UserSchema from "../modal/User.schema.js";

export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
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
    const user = new UserSchema({
        name: name,
        email: email,
        password: password
    })
    await user.save()
    return res.send('User stored successfully.')
}