import { createSelector } from 'reselect';

import { POLL_AVAILABLE_STATUSES } from '../Redux/VotingRedux';

const selectVotingDomain = state => state.voting;

export const selectPoll = createSelector(
  selectVotingDomain, state => state.poll
);

export const selectVote = createSelector(
  selectVotingDomain, state => state.vote
);

export const selectIsPollAvailable = createSelector(
  selectPoll, state => {
    console.log(state.status);
    console.log(POLL_AVAILABLE_STATUSES.indexOf(state.status));
    return (POLL_AVAILABLE_STATUSES.indexOf(state.status) > -1);
  }
);
