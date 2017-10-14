import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import {reducer as navReducer} from './NavigationRedux';
import {reducer as userAuthReducer} from './UserAuthRedux';
import {reducer as launchScreenReducer} from './AdminListRedux';
import {reducer as votingReducer} from "./VotingRedux"

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer,
    userAuth: userAuthReducer,
    launchScreen: launchScreenReducer,
    voting: votingReducer
  });

  return configureStore(rootReducer, rootSaga);
};
