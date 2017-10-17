import { createSelector } from 'reselect';
import { sortWith, descend, prop } from 'ramda';

const selectVoteHistoryDomain = state => state.voteHistory;

export const selectVoteHistory = createSelector(
  selectVoteHistoryDomain, state => state.voteHistoryList
);

export const selectSortedVoteHistory = createSelector(
  selectVoteHistory, state => {
    const voteHistory = Object.values(state);
    const sort = sortWith([descend(prop('date'))]);

    return sort(voteHistory);
  }
);

export const selectFirstSortedElement = createSelector(
  selectSortedVoteHistory, state => state[0]
);
