import React from 'react';
import { Router } from "@reach/router";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri:
    window._env_ !== undefined
      ? window._env_.REACT_APP_BACKEND_URL
      : "http://localhost:5000/graphql"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      hello
    </ApolloProvider>
  );
}


export default App;