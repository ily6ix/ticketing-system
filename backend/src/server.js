import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "../routes/userRoutes.js";
import ticketRoutes from "../routes/ticketRoutes.js";
import authRoutes from "../routes/authRoutes.js";
import testRoutes from "../routes/testRoutes.js";
import { testSupabaseConnection } from "../config/db.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "../../public")));

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/test", testRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Ticketing System Backend is running ✅");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Ticketing System API!" });
});

// Test Supabase connection
testSupabaseConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
