import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GET_CART } from './graphql/Cart'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { typeDefs, resolvers } from './graphql/resolvers'
const cache = new InMemoryCache();
// Url for Query
// const client = new ApolloClient({
//   uri: 'https://71z1g.sse.codesandbox.io/',
//   cache
// });
cache.writeQuery({
  query: GET_CART,
  data: {
    cartItems: {}
  }
})
// Url for Mutation

const client = new ApolloClient({
  uri: 'https://sxewr.sse.codesandbox.io/',
  cache,
  typeDefs,
  resolvers
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
