import gql from 'graphql-tag';

export const GET_TASKS = gql`
  query GetTasks {
    tasks @client {
      id
      text
      completed
    }
  }
`;
