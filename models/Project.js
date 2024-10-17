import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    tasks: [],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true },
);

// index
// pre save middlewares
// methods


const Project = new mongoose.model('Project', projectSchema);
export default Project;