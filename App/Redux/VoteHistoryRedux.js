import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types: VoteHistoryTypes, Creators: VoteHistoryActions } = createActions({
  fetchVoteHistory: [],
  fetchVoteHistorySuccess: ['data'],
});

const INITIAL_STATE = Immutable({
  voteHistoryList: {},
});

const fetchVoteHistorySuccessHandler = (state, { data }) => state.set('voteHistoryList', Immutable(data));

export const reducer = createReducer(INITIAL_STATE, {
  [VoteHistoryTypes.FETCH_VOTE_HISTORY_SUCCESS]: fetchVoteHistorySuccessHandler,
});
