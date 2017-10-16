import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { VoteHistoryTypes, VoteHistoryActions } from '../Redux/VoteHistoryRedux';

export function* fetchVoteHistory() {
  try {
    const items = yield firebase.database().ref('results').once('value');

    yield put(VoteHistoryActions.fetchVoteHistorySuccess(items.val()));
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* voteHistorySaga() {
  yield takeLatest(VoteHistoryTypes.FETCH_VOTE_HISTORY, fetchVoteHistory);
}
