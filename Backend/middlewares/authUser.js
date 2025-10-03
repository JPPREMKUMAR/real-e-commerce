import jwt from "jsonwebtoken"

import User from "../models/User.js"



const authUser = async (req, res, next) => {

    try {

        //console.log(req.headers)
        const { jwttoken } = req.headers
        //console.log(jwttoken)

        const payload = jwt.verify(jwttoken, process.env.JWT_SECRET)
        //console.log(payload)
        req.email = payload


        const getDetails = await User.findOne({ email: payload })

        const userId = getDetails._id.toString()

        req.userId = userId



        next()



    } catch (error) {


        console.log(error)
        return res.json({ error, success: false })
    }
}



export default authUser