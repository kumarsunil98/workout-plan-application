import Workout from "../models/workouts.js";

export const getAllWorkouts = async (req, res) => {
  const allWorkouts = await Workout.find({}).sort({ createdAt: -1 });
  if (!allWorkouts) {
    res.status(500).json({ error: "There is no workouts available" });
  }
  res.status(200).json(allWorkouts);
};

export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields", emptyFields });
  }

  try {
    const newWorkout = await Workout.create({ title, load, reps });
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};

export const getSingleWorkout = async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  if (!workout) {
    res.status(500).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

export const deleteWorkout = async (req, res) => {
  const workout = await Workout.findByIdAndDelete(req.params.id);
  if (!workout) {
    res.status(500).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};

export const updateWorkout = async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  if (!workout) {
    res.status(500).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};
