import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from "cors";
import './config/db.js';
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.routes.js';
import hotelRoute from './routes/hotel.routes.js';
import userRoute from './routes/users.routes.js';
import roomsRoute from './routes/rooms.routes.js';


const app = express();

//middlewares
app.use(cors())
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/user", userRoute);
app.use("/api/room", roomsRoute);



app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});



app.listen(PORT, function () {
    console.log('server listening on port ' + PORT);
})