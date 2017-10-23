import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    padding: Metrics.baseMargin,
  },
  button: {
    backgroundColor: '#3fc133',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
