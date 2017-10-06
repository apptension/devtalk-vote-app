import { takeLatest, put } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import UserAuthActions, { UserAuthTypes } from '../Redux/UserAuthRedux';

function* signInAnonymously() {
  try {
    yield firebase.auth().signInAnonymously();
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

function* authStateChanged({ data: { authenticated, user } }) {
  try {
    if (!authenticated) {
      yield signInAnonymously();
    } else {
      yield put(UserAuthActions.saveUserData(user));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

// process STARTUP actions
export function* watchUserAuth() {
  try {
    yield takeLatest(UserAuthTypes.AUTH_STATE_CHANGED, authStateChanged);
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}
