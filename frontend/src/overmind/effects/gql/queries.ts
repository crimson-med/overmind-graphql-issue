import { gql } from 'overmind-graphql'

export const books = gql`
  query Books {
  books {
    title
    author
  }
  }
`;