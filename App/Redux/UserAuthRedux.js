import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authStateChanged: ['data'],
  saveUserData: ['data'],
});

const INITIAL_STATE = Immutable({
  data: {},
});

const saveUserData = (state, { data }) => state.set('data', Immutable(data));

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_USER_DATA]: saveUserData,
});

export const UserAuthTypes = Types;
export default Creators;
