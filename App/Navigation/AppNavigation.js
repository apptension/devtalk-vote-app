import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import AdminScreen from '../Containers/AdminScreen';
import VoteScreen from '../Containers/VoteScreen';
import VoteHistoryScreen from '../Containers/VoteHistoryScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  AdminScreen: { screen: AdminScreen },
  VoteScreen: { screen: VoteScreen },
  VoteHistoryScreen: { screen: VoteHistoryScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
