// TYPEDEFS ARE WHAT YOU'RE LOOKING FOR AND RESOLVERS ARE HOW YOU FIND IT

// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
//type queries are methods you come up with that will be used to read you database
//mutations are used to alter data base, similar to update delete
const typeDefs = gql`
<<<<<<< HEAD
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactions: [Reaction]
  }

  type User {
    _id: ID
    username: String
    thoughts: [Thought]
    friends: [User]
    friendCount: Int
    activities: [Activity]
    reactions: [Reaction]
    gearItems: [Gear]
  }

  type Activity {
    _id: ID
    activity: String
    gearRequired: [Gear]
    participants: [User]
  }

  // What I will need to query entities
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    user: User
  }

  // What I will need to mutate entities
  type Query {
    thoughts(username: String): [Thought]
  }

  type Mutation{
    login
    createUser
    postThought
    addReaction
    addFriend
    addActivity
    addGear
  }
`;

// export the typeDefs
module.exports = typeDefs;
