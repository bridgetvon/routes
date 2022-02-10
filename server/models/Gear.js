const { Schema, model } = require("mongooose");
const dateFormat = require("../utils/dateFormat");

const gearSchema = new Schema({
  activity: {
    // the type of activity the gear will be used for
    type: String,
    required: true,
  },
  gearName: {
    // the gear itself
    type: String,
    required: true,
  },
  age: {
    // how old the gear is
    type: Number,
  },
  extra: {
    // is there enough to share?
    type: Boolean,
    required: false,
  },
});

module.exports = gearSchema;
