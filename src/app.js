import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()  // read doc req, res 

// cors configuration , settings -> objects(ctrl + space)   CORS_ORIGIN -> * from everywhere
app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// setting before cookie option 
// config json, set limit
app.use(express.json({limit: "16kb"}))  
// for url, extended -> nested objects
app.use(express.urlencoded({extended: true, limit: "16kb"}))
// public assets
app.use(express.static("public"))
// access and set cookie of user from server
app.use(cookieParser())

// import routes
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/users/login


export { app };
 
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App listening on port ${process.env.PORT}`);
//         })

//     }
//     catch (error) {
//         console.error("ERROR: ", error)
//     }
// })
