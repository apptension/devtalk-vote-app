import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { AdminListTypes, AdminListActions } from '../Redux/AdminListRedux';

export function* fetchAdminList(isAuth) {
  try {
    if (isAuth) {
      const items = yield firebase.database().ref('permissions/admins').once('value');

      yield put(AdminListActions.fetchAdminListSuccess(items.val()));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* adminListSaga() {
  try {
    yield takeLatest(AdminListTypes.FETCH_ADMIN_LIST, fetchAdminList);
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}
