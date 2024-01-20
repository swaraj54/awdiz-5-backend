import UserSchema from "../modals/User.schema.js"

export const Login = (req, res) => {
    return res.send("Login from controller.")
}

export const Register = (req, res) => {

    return res.send("Register")
}

export const getOwnData = (req, res) => {
    const { userId } = req.body;
    // user must login to access this controller
    // mongodb connection 
    return res.send(userId)
}