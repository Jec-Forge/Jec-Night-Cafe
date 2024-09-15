import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({path: "./config/config.env"});

// Allow CORS for frontend
app.use(cors({
    origin: [process.env.FRONTEND_URL],  // Ensure this is set in your .env file
    methods: ["POST", "OPTIONS"],        // Allow preflight requests 
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/reservation', reservationRouter)

dbConnection();

app.use(errorMiddleware)

export default app;
