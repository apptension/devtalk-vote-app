import { createSelector } from 'reselect';

const selectAdminListDomain = state => state.launchScreen;

export const selectAdminList = createSelector(
  selectAdminListDomain, state => state.adminList
);

export const selectIsAdmin = selectSavedUserData => createSelector(
  selectAdminList, selectSavedUserData, (adminList, userData) => adminList[userData.uid]
);
