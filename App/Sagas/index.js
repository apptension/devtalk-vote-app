import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */

import { watchStartup } from './StartupSagas';
import { watchUserAuth } from './UserAuthSagas';
import { adminListSaga } from './AdminListSagas';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  try {
    yield all([
      fork(watchStartup),
      fork(watchUserAuth),
      fork(adminListSaga),
    ]);
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
}
