import express from "express"
import { userSignUp, userLogin, userContactDetails, addAddress } from "../controllers/userController.js"

import authUser from "../middlewares/authUser.js"


const userRouter = express.Router()

userRouter.post("/signup", userSignUp)
userRouter.post("/login", userLogin)
userRouter.post("/contactDetails", authUser, userContactDetails)
userRouter.post("/addAddress", authUser, addAddress)














export default userRouter



