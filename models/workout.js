const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      duration: {
        type: Number,
        required: "Enter exercise duration",
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
    },
  ],
});

WorkoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((acc, curr) => {
    return acc + curr.duration;
  }, 0);
  return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
