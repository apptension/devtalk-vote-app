import { takeLatest, put, all } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { VotingActions, VotingTypes } from '../Redux/VotingRedux';

export function* sendVote(value) {
  try {
      yield put(VotingActions.sendVoteSuccess(value));
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* votingSaga() {
  yield all([
    takeLatest(VotingTypes.SEND_VOTE, sendVote),
  ]);
}

