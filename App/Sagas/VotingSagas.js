import { takeLatest, put, all } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import {
  VotingActions, VotingTypes,
  POLL_STATUS_IDLE, POLL_STATUS_ACTIVE, POLL_STATUS_SUMMARY,
} from '../Redux/VotingRedux';

export function* getStatus(action) {
  const { uid } = action;

  try {
    const votingSessionSnapshot = yield firebase.database().ref('votingSession').once('value');
    const votingSession = votingSessionSnapshot.val();

    if (!votingSession.isClosed) {
      if (votingSession.votes) {
        if (votingSession.votes[uid]) {
          yield put(VotingActions.getStatusSuccess(POLL_STATUS_IDLE));
        } else {
          yield put(VotingActions.getStatusSuccess(POLL_STATUS_ACTIVE));
        }
      } else {
        yield put(VotingActions.getStatusSuccess(POLL_STATUS_ACTIVE));
      }
    } else {
      yield put(VotingActions.getStatusSuccess(POLL_STATUS_SUMMARY));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* sendVote(action) {
  const { uid, value } = action;

  try {
    yield firebase.database().ref('votingSession/votes').update({ [uid]: value });
    yield put(VotingActions.sendVoteSuccess(value));
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* votingSaga() {
  try {
    yield all([
      takeLatest(VotingTypes.SEND_VOTE, sendVote),
      takeLatest(VotingTypes.GET_STATUS, getStatus),
    ]);
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

