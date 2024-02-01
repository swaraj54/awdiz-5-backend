import Jwt from 'jsonwebtoken'

export const isJwtExpire = async (req, res, next) => {
    try {
        const { token } = req.body;

        const decodedData = await Jwt.verify(token, process.env.JWT_SECRET);
        const getCurrentUser = Math.floor(Date.now() / 1000)

        if(decodedData?.exp <= getCurrentUser){
            return res.status(404).json({success : false,  tokenExpire : true, message : "Token is expired, Please login again." })
        }

        next();

    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}