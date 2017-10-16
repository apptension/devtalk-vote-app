import { createSelector } from 'reselect';

const selectVoteHistoryDomain = state => state.voteHistory;

export const selectVoteHistory = createSelector(
  selectVoteHistoryDomain, state => state.voteHistoryList
);
