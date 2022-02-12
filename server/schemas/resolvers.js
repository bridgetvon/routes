const { AuthenticationError } = require("apollo-server-errors");
const { User, Post } = require("../models");

//in resolvers you write the code for what the method is actually doing
//query must match typedef definition
const resolvers = {
  Query: {
    users: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.find(params).sort({ createdAt: -1 });
    },
    // parent as a placeholder parameter
    posts: async (parent, { username }) => {
      //   ternary operator to check if username exists
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("You got it wrong dude");
      }

      const correctPW = await user.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError("You got it wrong dude");
      }
    },
    createPost: async (parent, args) => {
      const post = await Post.create(args);

      return post;
    },
    // login
    //addReaction
    // addFriend
    // addActivity
  },
};
module.exports = resolvers;
