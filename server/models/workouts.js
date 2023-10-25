import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required:true
    },
    load :{
        type : Number,
        required:true
    } 
},{timestamps : true})

const workout = mongoose.model("workouts", workoutSchema);
export default workout;