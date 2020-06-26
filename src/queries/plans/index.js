import gql from 'graphql-tag';

export const getAll = () => gql`
  {
    listPlans {
      id
      weeklyRecipes
      numberOfPeople
      price
    }
  }
`;
