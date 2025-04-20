import jwt from "jsonwebtoken"
export const isLoggedIn = async (req, res, next) => {
    const token = req?.cookies?.token
    // console.log(token);

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const user = jwt.verify(token, "shhh")
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    req.user = user.id
    next()
}