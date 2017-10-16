import { createSelector } from 'reselect';

const selectVotingDomain = state => state.voting;

export const selectStatus = createSelector(
  selectVotingDomain, state => state.status
);
