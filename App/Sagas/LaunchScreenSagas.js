import { put } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { LaunchScreenActions } from '../Redux/LaunchScreenRedux';

export function* fetchAdminList() {
  try {
    const items = yield firebase.database().ref('permissions/admins').once('value');

    yield put(LaunchScreenActions.saveAdminList(items.val()));
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}
