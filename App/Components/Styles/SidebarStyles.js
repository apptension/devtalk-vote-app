import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3fc133',
    height: 150,
    display: 'flex',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
