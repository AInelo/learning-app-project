require('dotenv').config();
import express, { NextFunction, Response, Request } from "express";
export const app = express();
import cors from "cors"
import cookieParser from "cookie-parser";


// Body parser
app.use(express.json({limit : "50mb"}));

// Cookie parser
app.use(cookieParser());

// cors => cross resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}));

// Testing API
app.get("/test", (req:Request, res:Response, next : NextFunction) => {
    res.status(200).json({
        success : true,
        message : "API is working"
    })
})

// Unknow Route 
app.all("*",  (req:Request, res:Response, next : NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err)
})