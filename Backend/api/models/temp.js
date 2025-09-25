import mongoose from "mongoose";

const tempSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: "id field is required",
    },
    symbol: {
      type: String,
      // unique: true,
      required: "symbol field is required",
    },

    name: {
      type: String,
      required: "name field is required",
    },
  },
  { versionKey: false }
);

// Creating a model from our schema
const model = mongoose.model("temp", tempSchema);

// Exporting the model as default
export default model;
