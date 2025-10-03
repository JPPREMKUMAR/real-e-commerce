import express from "express"
import "dotenv/config"
import cors from "cors"

import connectDB from "./config/db.js"


import userRouter from "./routes/userRoutes.js"

const app = express()
// MiddleWares
app.use(cors())
app.use(express.json())


// Routes

app.get("/", (req, res) => {

    res.send("Api Working")
})


// User Routes
app.use("/api/user", userRouter)


// DB Connection
await connectDB()


// PORT NUMBER 
const PORT = process.env.PORT || 3000

// Start Server 


app.listen(PORT, () => {

    console.log(`Server Working on ${PORT}`)
})





export default app 