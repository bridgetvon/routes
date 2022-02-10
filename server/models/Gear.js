const { Schema, model } = require("mongooose");
const dateFormat = require("../utils/dateFormat");

const gearSchema = new Schema({
  activity: {
    // the type of activity the gear will be used for
    type: String,
    required: true,
  },
  gearName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  extra: {
    type: Boolean,
    required: false,
  },
});

module.exports = gearSchema;
