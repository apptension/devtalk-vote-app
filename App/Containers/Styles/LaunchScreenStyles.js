import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  item: {
    marginLeft: 0,
    paddingLeft: 10,
    width: '100%',
  },
  itemBody: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  itemDate: {
    color: '#aaaaaa',
    fontSize: 10,
    textAlign: 'center'
  },
  icon: {
    color: '#3fc133',
    marginRight: 5
  }
});
