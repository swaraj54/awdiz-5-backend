export const checkId = (req, res, next) => {
    const { userId } = req.body;
    if (userId) {
        next()
    } else {
        return res.send("UserId is required. from middleware")
    }
}