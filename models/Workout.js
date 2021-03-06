const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Cardio or Resistance"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of exercise"
            },
            duration: {
                type: Number,
                required: "Enter duration in minutes"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ]
});

// const exerciseSchema = new Schema({
//     exercises: [
//         {
//             type: {
//                 type: Schema.Types.ObjectId,
//                 ref: "workoutSchema"
//             },
//             name: {
//                 type: String,
//                 trim: true,
//                 required: "Enter name of exercise"
//             },
//             duration: {
//                 type: Number,
//                 required: "Enter duration in minutes"
//             },
//             weight: {
//                 type: Number,
//                 required: "Enter weight in pounds"
//             },
//             reps: {
//                 type: Number,
//                 required: "Enter number of reps"
//             },
//             sets: {
//                 type: Number,
//                 required: "Enter number of sets"
//             },
//             distance: {
//                 type: Number,
//                 required: "Enter distance in miles"
//             },
//         }
//     ]
// });

const Workout = mongoose.model("Workout", workoutSchema);
// const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = { Workout };
