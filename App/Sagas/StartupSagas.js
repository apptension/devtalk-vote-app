import { eventChannel } from 'redux-saga';
import { put, take, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { when, complement, isNil } from 'ramda';

import { StartupTypes } from '../Redux/StartupRedux';
import UserAuthActions from '../Redux/UserAuthRedux';

const createAuthChannel = () => eventChannel((emitter) => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    setTimeout(() => {
      if (user) {
        emitter({
          user,
          authenticated: true,
        });
      } else {
        emitter({
          authenticated: false,
        });
      }
    });
  });

  return () => unsubscribe();
});

function* listenForAuth() {
  try {
    const channel = createAuthChannel();

    while (true) { // eslint-disable-line
      const { authenticated, user } = yield take(channel);

      yield put(UserAuthActions.authStateChanged({
        authenticated,
        user: when(
          complement(isNil),
          (user) => user.toJSON()
        )(user),
      }));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

// process STARTUP actions
export function* watchStartup() {
  try {
    yield takeLatest(StartupTypes.STARTUP, listenForAuth);
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}
