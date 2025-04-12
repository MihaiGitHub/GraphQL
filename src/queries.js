import { gql } from "@apollo/client";

export const GET_COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const GET_COLLECTION = gql`
  query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      items {
        name
      }
    }
  }
`;
