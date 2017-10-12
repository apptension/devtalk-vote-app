import React, { PropTypes, Component } from 'react';
import { View, Button } from 'react-native';

// Styles
import styles from '../Containers/Styles/LaunchScreenStyles';
import colors from '../Themes/Colors';

export class AdminPanelButton extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    uid: PropTypes.string,
    adminList: PropTypes.object,
  };

  render() {
    const { navigation, uid, adminList } = this.props;

    if (!adminList[uid]) {
      return null;
    }

    return (
      <View style={styles.section}>
        <Button title="Admin Panel" color={colors.green} onPress={() => navigation.navigate('AdminScreen')} />
      </View>
    );
  }
}
