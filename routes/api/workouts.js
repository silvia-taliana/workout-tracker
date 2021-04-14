const router = require("express").Router();
const { Workout } = require("../../models/Workout.js");

// get all workouts
router.get("/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: { totalDuration: { $sum: "$exercises.duration" } }
        }
    ]).exec((error, result) => {
        if (error) {
            res.json(error);
            return;
        }
        res.json(result);
    })
});

// create new workout
router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// add exercises to workout
router.put("/workouts/:id", (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => {
            workout.exercises.push(req.body);
            Workout.updateOne({ _id: req.params.id }, workout, (err, result) => {
                res.json(workout);
            })
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get workouts in range
router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $sort: { day: -1 }
        },
        {
            $limit: 7
        },
        {
            $sort: { day: 1 }
        },
        {
            $addFields: { totalDuration: { $sum: "$exercises.duration" } }
        }
    ]).exec((error, result) => {
        if (error) {
            res.json(error);
            return;
        }
        res.json(result);
    })
});

module.exports = router;