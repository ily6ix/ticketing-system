import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js"; 
import { testSupabaseConnection } from './config/db.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/users', userRoutes);
app.use("/auth", authRoutes);
app.use('/tickets', ticketRoutes);
app.use("/test", testRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Server is running ');
});

// Test Supabase connection
testSupabaseConnection();

//for vercel deployment
module.exports = app;


//for local host
//const PORT = 3000;
//app.listen(PORT, () => {
//    console.log(`🚀 Server running on http://localhost:${PORT}`);
//});
