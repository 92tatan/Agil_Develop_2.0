import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './RouterApp';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,
  document.getElementById('root')
);


