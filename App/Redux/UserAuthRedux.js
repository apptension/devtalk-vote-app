import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types: UserAuthTypes, Creators: UserAuthActions } = createActions({
  authStateChanged: ['data'],
  saveUserData: ['data'],
});

const INITIAL_STATE = Immutable({
  data: {},
  isAuth: false,
});

const saveUserData = (state, { data }) => state.set('data', Immutable(data))
  .set('isAuth', Immutable(true));

export const reducer = createReducer(INITIAL_STATE, {
  [UserAuthTypes.SAVE_USER_DATA]: saveUserData,
});
