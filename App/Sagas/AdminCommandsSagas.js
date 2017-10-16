import { all, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import moment from 'moment';

import { AdminCommandsTypes } from '../Redux/AdminCommandsRedux';

export function* startVote() {
  try {
    yield firebase.database().ref('votingSession').set({ isClosed: false });
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* stopVote() {
  try {
    const votesSnapshot = yield firebase.database().ref('votingSession/votes').once('value');
    const votes = votesSnapshot.val();

    const votersCount = votesSnapshot.numChildren();
    const sum = Object.keys(votes).reduce((previous, key) => previous + votes[key], 0);
    const score = Math.round(sum / votersCount).toFixed(2);

    yield firebase.database().ref('votingSession').set({ isClosed: true });
    yield new Promise(() => firebase.database().ref('results').push({ score, date: moment().unix(), votersCount }));
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
