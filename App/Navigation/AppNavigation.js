import { StackNavigator } from 'react-navigation';
import AdminScreen from '../Containers/AdminScreen';
import VoteScreen from '../Containers/VoteScreen';
import VoteHistoryScreen from '../Containers/VoteHistoryScreen';
import MainScreen from '../Containers/MainScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainScreen: { screen: MainScreen },
  AdminScreen: { screen: AdminScreen },
  VoteScreen: { screen: VoteScreen },
  VoteHistoryScreen: { screen: VoteHistoryScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
