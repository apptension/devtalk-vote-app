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

export const { Types: VoteScreenTypes, Creators: VoteScreenActions } = createActions({
  fetchPoll: [],
  fetchPollSuccess: ['data'],
});

const INITIAL_STATE = Immutable({
  poll: {
    status: POLL_STATUS_NOT_STARTED,
    name: '',
  },
  vote: {
    status: VOTE_STATUS_NOT_VOTED,
    value: null,
  }
});

const fetchPollSuccessHandler = (state, { data }) => state.set('poll', Immutable(data));

export const reducer = createReducer(INITIAL_STATE, {
  [VoteScreenTypes.FETCH_POLL_SUCCESS]: fetchPollSuccessHandler,
});
