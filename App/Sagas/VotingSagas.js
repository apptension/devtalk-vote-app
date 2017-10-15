import { takeLatest, put, all } from 'redux-saga/effects';
import { VotingActions, VotingTypes } from '../Redux/VotingRedux';

export function* sendVote(action) {
  const {uid, value} = action;

  try {
    yield firebase.database().ref('votingTest/votes').update({ [uid]: value });

    yield put(VotingActions.sendVoteSuccess(value));
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* closePoll() {
  try {
    const results = {
      ['1']: 2,
      ['2']: 4,
      ['3']: 8,
      ['4']: 2,
    };
    const total = Object.keys(results).reduce((sum, point) => (sum += point * results[point]), 0);
    yield put(VotingActions.closePollSuccess({ results, total }));
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}

export function* votingSaga() {
  yield all([
    takeLatest(VotingTypes.SEND_VOTE, sendVote),
    takeLatest(VotingTypes.CLOSE_POLL, closePoll),
  ]);
}

