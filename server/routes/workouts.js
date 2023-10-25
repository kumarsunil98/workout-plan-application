import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const Router = express.Router();

//Get All Workouts
Router.get("/", getAllWorkouts);

//Create a workout
Router.post("/", createWorkout);

// Get a single workout
Router.get("/:id", getSingleWorkout);

// Delete a single workout
Router.delete("/:id", deleteWorkout);

// Update a workout
Router.patch("/:id", updateWorkout);

export default Router;
