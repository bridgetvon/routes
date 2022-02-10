// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    thoughts: [Thought]
    friends: [User]
    activities: [Activity]
    reactions: [Reaction]
    gearItems: [Gear]
  }

  type Query {
    thoughts: [Thought]
  }
`;

// export the typeDefs
module.exports = typeDefs;
