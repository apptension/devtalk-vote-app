import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const POLL_STATUS_IDLE = 'idle';
export const POLL_STATUS_ACTIVE = 'active';
export const POLL_STATUS_SUMMARY = 'summary';

export const { Types: VotingTypes, Creators: VotingActions } = createActions({
  sendVote: ['uid', 'value'],
  sendVoteSuccess: ['data'],
  getStatus: ['uid'],
  getStatusSuccess: ['status'],
});

const INITIAL_STATE = Immutable({
  status: POLL_STATUS_ACTIVE,
});

const sendVoteSuccessHandler = (state) => state.set('status', POLL_STATUS_IDLE);

const getStatusSuccessHandler = (state, { status }) => state.set('status', status);

export const reducer = createReducer(INITIAL_STATE, {
  [VotingTypes.SEND_VOTE_SUCCESS]: sendVoteSuccessHandler,
  [VotingTypes.GET_STATUS_SUCCESS]: getStatusSuccessHandler,
});
