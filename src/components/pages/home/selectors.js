import { createSelector as compose } from 'reselect';

import { getEmptyRecipes, indexByNumberOfPeople } from './helpers';

export const getState = ({ state }) => state;

export const getPlans = ({ plans = {} }) => plans;

export const isLoading = compose(getPlans, ({ loading = false }) => loading);

export const geResults = compose(getPlans, ({ results = [] }) => results);

export const getIndexes = compose(geResults, results =>
  indexByNumberOfPeople(results)
);

export const getNumberOfPeopleOptions = compose(
  getIndexes,
  ({ numberOfPeopleOrder: numberOfPeopleOptions = [] }) => numberOfPeopleOptions
);

export const getNumberOfPeople = compose(
  getState,
  getIndexes,
  (state, { numberOfPeopleOrder: [numberOfPeople] }) =>
    state.numberOfPeople || numberOfPeople || 0
);

export const getWeeklyRecipesByNumberOfPeople = compose(
  getState,
  getNumberOfPeople,
  getIndexes,
  (
    state,
    numberOfPeople,
    { numberOfPeople: { [numberOfPeople]: weeklyRecipes } }
  ) => weeklyRecipes || getEmptyRecipes()
);

export const getWeeklyRecipesOptions = compose(
  getWeeklyRecipesByNumberOfPeople,
  ({ weeklyRecipesOrder: weeklyRecipesOptions = [] }) => weeklyRecipesOptions
);

export const getWeeklyRecipes = compose(
  getState,
  getWeeklyRecipesByNumberOfPeople,
  (state, { weeklyRecipesOrder }) => {
    const [weeklyRecipes] = weeklyRecipesOrder;

    switch (true) {
      case weeklyRecipesOrder.includes(state.weeklyRecipes):
        return state.weeklyRecipes;
      case !!weeklyRecipes:
        return weeklyRecipes;
      default:
        return 0;
    }
  }
);

export const getPrice = compose(
  getWeeklyRecipes,
  getWeeklyRecipesByNumberOfPeople,
  (weeklyRecipes, { weeklyRecipes: { [weeklyRecipes]: price } }) =>
    price || '0.00'
);

export default compose(
  isLoading,
  getNumberOfPeopleOptions,
  getNumberOfPeople,
  getWeeklyRecipesOptions,
  getWeeklyRecipes,
  getPrice,
  (
    loading,
    numberOfPeopleOptions,
    numberOfPeople,
    weeklyRecipesOptions,
    weeklyRecipes,
    price
  ) => ({
    loading,
    numberOfPeopleOptions,
    numberOfPeople,
    weeklyRecipesOptions,
    weeklyRecipes,
    price,
  })
);
