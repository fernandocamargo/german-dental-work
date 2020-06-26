import { useCallback, useState } from 'react';

import { usePlans } from 'hooks';

import {
  getInitialState,
  setNumberOfPeople,
  setWeeklyRecipes,
} from './reducers';
import getDataFrom from './selectors';

export const useHome = () => {
  const [state, setState] = useState(getInitialState());
  const plans = usePlans();
  const changeNumberOfPeople = useCallback(
    numberOfPeople => setState(setNumberOfPeople(Number(numberOfPeople))),
    []
  );
  const changeWeeklyRecipes = useCallback(
    weeklyRecipes => setState(setWeeklyRecipes(Number(weeklyRecipes))),
    []
  );
  const data = getDataFrom({ plans, state });

  return { changeNumberOfPeople, changeWeeklyRecipes, ...data };
};
