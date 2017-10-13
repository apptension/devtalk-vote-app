import { all, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { AdminCommandsTypes } from '../Redux/AdminCommandsRedux';

export function* startVote() {
  try {
    yield firebase.database().ref('votes2').push({ isClosed: false });
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* stopVote() {
  try {
    // yield firebase.database().ref('votes2').update({ isClosed: false });
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* adminCommandsSaga() {
  yield all([
    takeLatest(AdminCommandsTypes.START_VOTE, startVote),
    takeLatest(AdminCommandsTypes.STOP_VOTE, stopVote),
  ]);
}
