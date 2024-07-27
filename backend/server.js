import express from "express";
import path from 'path';
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import 'dotenv/config.js';
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working");
});

connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

app.use(express.static (path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});


// mongodb+srv://sunilsrinivaas97:welcometotheclub@cluster0.qotjeh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0