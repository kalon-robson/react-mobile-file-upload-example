import React from 'react';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import Constants from 'expo-constants';
import { Entry } from './src';

const uploadLink = createUploadLink({
  credentials: 'include',
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
  uri: Constants.expoConfig?.extra?.API_SERVER_URL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink as unknown as ApolloLink,
});

export default () => (
  <ApolloProvider client={client}>
    <Entry />
  </ApolloProvider>
);
