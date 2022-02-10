const { Schema, model } = require("mongoose");
const User = require("./User");
const gearSchema = require("./Gear");

const activitySchema = new Schema({
  activity: {
    type: String,
  },
  gearRequired: [gearSchema], // Each activity will have one or more pieces of gear required
  difficultyLevel: {
    type: String,
  },
  users: [User], // many users will be part of each activity
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
