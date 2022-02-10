// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
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

  type Reaction {
    
  }

  type Query {
    thoughts: [Thought]
  }
`;

// export the typeDefs
module.exports = typeDefs;
