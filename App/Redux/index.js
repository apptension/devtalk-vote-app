import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    userAuth: require('./UserAuthRedux').reducer,
    launchScreen: require('./LaunchScreenRedux').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
