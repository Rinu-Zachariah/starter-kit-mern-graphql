

const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer, gql } = require('apollo-server-express');
const fetch = require('node-fetch');

var cors = require('cors')

// const baseURL = ``;

const typeDefs = `
  type Query {
    getAll(input: Float!): [String]!
  }
`

const resolvers = {
  Query: {
    getAll: (parent, args) => {
      const { input } = args;
      return fetch(``).then(res => res.json())
    },
  },
}

const PORT = 5000;
const app = express();
app.use(cors());
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
console.log(`Server listening on http://localhost:${PORT} ...`);
app.listen(PORT);