import { createSelector } from 'reselect';

const selectLaunchScreenDomain = state => state.launchScreen;

export const selectAdminList = createSelector(
  selectLaunchScreenDomain, state => state.adminList
);
