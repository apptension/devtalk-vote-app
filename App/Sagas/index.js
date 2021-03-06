import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */

import { watchStartup } from './StartupSagas';
import { watchUserAuth } from './UserAuthSagas';
import { adminCommandsSaga } from './AdminCommandsSagas';
import { adminListSaga } from './AdminListSagas';
import { votingSaga } from './VotingSagas';
import { voteHistorySaga } from './VoteHistorySagas';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  try {
    yield all([
      fork(watchStartup),
      fork(watchUserAuth),
      fork(adminCommandsSaga),
      fork(adminListSaga),
      fork(votingSaga),
      fork(voteHistorySaga),
    ]);
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}
