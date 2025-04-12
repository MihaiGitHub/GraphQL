import React from "react";

// GraphQL client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize GraphQL client
const client = new ApolloClient({
  uri: "https://crwn-clothing.com/", // Replace with your actual endpoint
  cache: new InMemoryCache(),
});

const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
