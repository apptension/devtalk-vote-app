import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import { reducer as navReducer } from './NavigationRedux';
import { reducer as userAuthReducer } from './UserAuthRedux';
import { reducer as adminCommandsReducer } from './AdminCommandsRedux';
import { reducer as launchScreenReducer } from './AdminListRedux';
import { reducer as votingReducer } from './VotingRedux';
import { reducer as voteHistoryReducer } from './VoteHistoryRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer,
    userAuth: userAuthReducer,
    adminCommands: adminCommandsReducer,
    launchScreen: launchScreenReducer,
    voting: votingReducer,
    voteHistory: voteHistoryReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
