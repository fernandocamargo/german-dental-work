import { createSelector } from 'reselect';

export const selectLoading = ({ loading }) => loading || false;

export const selectData = ({ data }) => data || {};

export const selectResults = createSelector(
  selectData,
  ({ listPlans: results }) => results || []
);

export default createSelector(
  selectLoading,
  selectResults,
  (loading, results) => ({
    loading,
    results,
  })
);
