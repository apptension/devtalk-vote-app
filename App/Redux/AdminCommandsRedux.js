import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types: AdminCommandsTypes, Creators: AdminCommandsActions } = createActions({
  startVote: [],
  stopVote: [],
});

const INITIAL_STATE = Immutable({
  startMessage: '',
});

export const reducer = createReducer(INITIAL_STATE, {

});
