import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const POLL_STATUS_NOT_STARTED = 'not-started';
export const POLL_STATUS_STARTED = 'started';
export const POLL_STATUS_RESULTS = 'results';
export const POLL_AVAILABLE_STATUSES = [
  POLL_STATUS_STARTED,
  POLL_STATUS_RESULTS
];

export const VOTE_STATUS_NOT_VOTED = 'not-voted';
export const VOTE_STATUS_VOTED = 'voted';

export const { Types: VotingTypes, Creators: VotingActions } = createActions({
  fetchPoll: [],
  fetchPollSuccess: ['data'],
  sendVote: ['value'],
  sendVoteSuccess: ['data'],
});

const INITIAL_STATE = Immutable({
  poll: {
    id: null,
    status: POLL_STATUS_STARTED,
    name: '',
    results: [],
  },
  vote: {
    status: VOTE_STATUS_NOT_VOTED,
    value: null,
  }
});

const fetchPollSuccessHandler = (state, { data }) => state.set('poll', Immutable(data));

const sendVoteSuccessHandler = (state, { data }) => {
  return (state.setIn(['vote', 'status'], VOTE_STATUS_VOTED).setIn(['vote', 'value'], data.value));
};

export const reducer = createReducer(INITIAL_STATE, {
  [VotingTypes.FETCH_POLL_SUCCESS]: fetchPollSuccessHandler,
  [VotingTypes.SEND_VOTE_SUCCESS]: sendVoteSuccessHandler,
});
