import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types: LaunchScreenTypes, Creators: LaunchScreenActions } = createActions({
  saveAdminList: ['data'],
});

const INITIAL_STATE = Immutable({
  adminList: {},
});

const saveAdminListHandler = (state, { data }) => state.set('adminList', Immutable(data));

export const reducer = createReducer(INITIAL_STATE, {
  [LaunchScreenTypes.SAVE_ADMIN_LIST]: saveAdminListHandler,
});
