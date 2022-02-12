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
    thoughts: [Thought]
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
=======
    type Thought{
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
       
    }
    type Query {
<<<<<<< HEAD
        thoughts(username: String): [Thought]
      }
=======
        thoughts: [Thought]
        
    }
>>>>>>> 8c50a949adc6172aeae947bb18292a5ca6916435
  
>>>>>>> 2223b4b2b3daacc53721d32011d93fb235bdda47
`;

// export the typeDefs
module.exports = typeDefs;
