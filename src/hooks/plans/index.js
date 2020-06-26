import { useQuery } from '@apollo/react-hooks';

import { getAll } from 'queries/plans';

import select from './selectors';

export default () => {
  const query = useQuery(getAll());

  return select(query);
};
