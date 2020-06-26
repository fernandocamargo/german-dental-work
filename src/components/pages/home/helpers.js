import { concatOnce } from 'helpers/array';
import { assign } from 'helpers/object';

export const getEmptyPeople = () => ({
  numberOfPeopleOrder: [],
  numberOfPeople: {},
});

export const getEmptyRecipes = () => ({
  weeklyRecipesOrder: [],
  weeklyRecipes: {},
});

export const indexByNumberOfPeople = results =>
  results.reduce(
    (
      { numberOfPeopleOrder, numberOfPeople },
      { numberOfPeople: people, weeklyRecipes: recipe, price }
    ) => {
      const { [people]: peopleXrecipes = getEmptyRecipes() } = numberOfPeople;
      const {
        weeklyRecipes: recipes,
        weeklyRecipesOrder: recipesOrder,
      } = peopleXrecipes;

      return {
        numberOfPeopleOrder: concatOnce(people).at(numberOfPeopleOrder),
        numberOfPeople: assign(numberOfPeople, {
          [people]: assign(peopleXrecipes, {
            weeklyRecipes: assign(recipes, { [recipe]: price }),
            weeklyRecipesOrder: concatOnce(recipe).at(recipesOrder),
          }),
        }),
      };
    },
    getEmptyPeople()
  );
