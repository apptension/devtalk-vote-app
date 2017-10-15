import { createSelector } from 'reselect';

const selectUserAuthDomain = state => state.userAuth;

export const selectSavedUserData = createSelector(
  selectUserAuthDomain, state => state.data
);

export const selectIsUserAuthenticated = createSelector(
  selectUserAuthDomain, state => state.isAuth
);
