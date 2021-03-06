import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types: AdminListTypes, Creators: AdminListActions } = createActions({
  fetchAdminList: [],
  fetchAdminListSuccess: ['data'],
});

const INITIAL_STATE = Immutable({
  adminList: {},
});

const fetchAdminListSuccessHandler = (state, { data }) => state.set('adminList', Immutable(data));

export const reducer = createReducer(INITIAL_STATE, {
  [AdminListTypes.FETCH_ADMIN_LIST_SUCCESS]: fetchAdminListSuccessHandler,
});
