import React, { PropTypes, Component } from 'react';
import { View, Button } from 'react-native';

// Styles
import styles from '../Containers/Styles/LaunchScreenStyles';
import colors from '../Themes/Colors';

export class AdminPanelButton extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool,
  };

  render() {
    const { navigation, isAdmin } = this.props;

    if (!isAdmin) {
      return null;
    }

    return (
      <View style={styles.section}>
        <Button title="Admin Panel" color={colors.green} onPress={() => navigation.navigate('AdminScreen')} />
      </View>
    );
  }
}
