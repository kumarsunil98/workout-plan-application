import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/workouts", workoutRoutes);

mongoose.connect(process.env.database_uri).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening on port:", process.env.PORT);
  });
});
mongoose.connection.on("connected", () => {
  console.log("database connection estabalished");
});
mongoose.connection.on("disconnected", () => {
  console.log("database disconnected");
});
mongoose.connection.on("error", () => {
  console.log("Error while connecting to database");
});
