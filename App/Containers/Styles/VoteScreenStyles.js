import { StyleSheet } from 'react-native';
import tinycolor from 'tinycolor2';
import { Metrics, ApplicationStyles } from '../../Themes/';

export const VOTE_BUTTON_COLOR_RAW = '#ff684f';
export const VOTE_BUTTON_COLOR = tinycolor(VOTE_BUTTON_COLOR_RAW);

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
    height: 300,
  },
  voteButton: {
    flexBasis: '49%',
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: VOTE_BUTTON_COLOR.toString(),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultsList: {
    marginTop: 10,
    paddingHorizontal: Metrics.marginHorizontal,
  },
  resultLine: {
    textAlign: 'center',
    marginBottom: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  voteQuantity: {
    fontWeight: 'bold',
  },
});
