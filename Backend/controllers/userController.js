
import User from "../models/User.js"
import Address from "../models/Address.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"





// Generate JWT TOKEN 


const generateJWTToken = (payload) => {

    return jwt.sign(payload, process.env.JWT_SECRET)
}

//User Sign Up


export const userSignUp = async (req, res) => {

    try {

        const { email, password, name, phone } = req.body


        const isUserPresent = await User.findOne({ email })
        //console.log(isUserPresent)

        if (isUserPresent === null) {

            if (email !== '' && password.length >= 8 && phone.length === 10 && name.length > 4) {

                const hashedPassword = await bcrypt.hash(password, 10)
                // console.log(hashedPassword)
                const newUser = new User({

                    email, password: hashedPassword, name, phone
                })
                await newUser.save()
                const payload = email
                const jwtToken = generateJWTToken(payload)
                res.json({ success: true, message: "User Signup Successfully.", jwtToken })


            } else {

                return res.json({ success: false, message: "Please Enter Valid Details" })
            }


        } else {

            return res.json({ success: false, message: "This Email Already Registered." })

        }





    } catch (error) {


        console.log(error)
        return res.json({ error, success: false })
    }


}


// User Login

export const userLogin = async (req, res) => {

    try {

        const { email, password } = req.body
        const isUser = await User.findOne({ email })
        if (isUser === null) {

            return res.json({ success: false, message: "Please Use Valid Email Address" })
        } else {
            const isPassword = await bcrypt.compare(password, isUser.password)
            console.log(isPassword)

            if (isPassword === true) {

                const payload = email
                const jwtToken = generateJWTToken(payload)

                return res.json({ success: true, jwtToken, message: "Login Successful." })


            } else {
                return res.json({ success: false, message: "Please Use Valid Password" })

            }

        }

    } catch (error) {


        console.log(error)
        return res.json({ error, success: false })
    }


}



// Get User ContactDetails

export const userContactDetails = async (req, res) => {

    try {
        const { email } = req
        //console.log(email)


        const userDetails = await User.findOne({ email: email }, { email: 1, phone: 1, name: 1 })

        res.json({ success: true, contactDetails: userDetails })


    } catch (error) {


        console.log(error)
        return res.json({ error, success: false })
    }

}




// Add New Address


export const addAddress = async (req, res) => {

    try {
        const { userId } = req
        console.log(userId)
        const { firstName, lastName, country, companyName, street, landmark, city, state, phone, pinCode, deliveryInstruction } = req.body

        const newAddress = new Address({
            userId: userId,
            firstName,
            lastName,
            country,
            companyName,
            street,
            landmark,
            city,
            state,
            phone,
            pinCode,
            deliveryInstruction
        })
        //console.log(newAddress)
        newAddress.save()
        res.json({ success: true, message: "Address Add Successfully." })



    } catch (error) {


        console.log(error)
        return res.json({ error, success: false })
    }


}