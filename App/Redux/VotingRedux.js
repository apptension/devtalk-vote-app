import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const POLL_STATUS_IDLE = 'idle';
export const POLL_STATUS_ACTIVE = 'active';
export const POLL_STATUS_SUMMARY = 'summary';
export const POLL_AVAILABLE_STATUSES = [
  POLL_STATUS_ACTIVE,
  POLL_STATUS_SUMMARY,
];

export const VOTE_STATUS_NOT_VOTED = 'not-voted';
export const VOTE_STATUS_VOTED = 'voted';

export const { Types: VotingTypes, Creators: VotingActions } = createActions({
  fetchPoll: [],
  fetchPollSuccess: ['data'],
  sendVote: ['value'],
  sendVoteSuccess: ['data'],
  closePoll: [],
  closePollSuccess: ['data'],
});

const INITIAL_STATE = Immutable({
  poll: {
    id: null,
    status: POLL_STATUS_ACTIVE,
    name: '',
    results: [],
    total: 0,
  },
  vote: {
    status: VOTE_STATUS_NOT_VOTED,
    value: null,
  },
});

const fetchPollSuccessHandler = (state, { data }) => state.set('poll', Immutable(data));

const closePollSuccessHandler = (state, { data }) =>
  state.setIn(['poll', 'status'], POLL_STATUS_SUMMARY)
    .setIn(['poll', 'results'], data.results)
    .setIn(['poll', 'total'], data.total);

const sendVoteSuccessHandler = (state, { data }) =>
  state.setIn(['vote', 'status'], VOTE_STATUS_VOTED).setIn(['vote', 'value'], data.value);

export const reducer = createReducer(INITIAL_STATE, {
  [VotingTypes.FETCH_POLL_SUCCESS]: fetchPollSuccessHandler,
  [VotingTypes.SEND_VOTE_SUCCESS]: sendVoteSuccessHandler,
  [VotingTypes.CLOSE_POLL_SUCCESS]: closePollSuccessHandler,
});
