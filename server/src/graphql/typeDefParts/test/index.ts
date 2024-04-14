import { gql } from 'graphql-tag';

export const testTypeDefs = gql`
    type Query {
      test: String
    }

    type Mutation {
      uploadFile(file: Upload!): Boolean
    }
`;
