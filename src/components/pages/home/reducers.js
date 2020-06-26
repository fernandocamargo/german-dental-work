export const getInitialState = () => ({
  numberOfPeople: null,
  weeklyRecipes: null,
});

export const setNumberOfPeople = numberOfPeople => () => ({
  weeklyRecipes: null,
  numberOfPeople,
});

export const setWeeklyRecipes = weeklyRecipes => ({ numberOfPeople }) => ({
  numberOfPeople,
  weeklyRecipes,
});
