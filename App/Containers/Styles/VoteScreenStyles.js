import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  centered: {
    alignItems: 'center',
  },
  voteContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    flexGrow: 4,
    height: 300
  },
  voteButton: {
    flexBasis: '49%',
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  }
});
