import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import projectsRouter from './routes/Projects.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;

//DB CONNECTION
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("connected to mongo db");
} catch (error) {
  console.error(error);
}

//MIDDLEWARES
app.use(morgan("dev")); //logger
app.use(express.json()); //parse data to body
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// ===== Routes ===== //
app.get("/", (req, res) => {
  res.send("welcome to my api");
});


app.use('/api/projects', projectsRouter);
//ERROR MIDDLEWARES
app.use((e, req, res, next) => {
  console.log(e);
  res.status(500).json({ message: e.message, error: e });
});
app.listen(PORT, () => console.log("server running on port: ", PORT));
