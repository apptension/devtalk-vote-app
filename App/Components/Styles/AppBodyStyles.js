import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: colors.snow,
    padding: 20,
  },
});
