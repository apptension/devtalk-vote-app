import Immutable from 'seamless-immutable';
import Reactotron from 'reactotron-react-native'; //eslint-disable-line
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'; //eslint-disable-line
import sagaPlugin from 'reactotron-redux-saga'; //eslint-disable-line

import Config from '../Config/DebugConfig';

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: 'Ignite App' })
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
