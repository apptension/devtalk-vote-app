import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';
import size from 'lodash/size';

// Styles
import styles from '../Containers/Styles/LaunchScreenStyles';

export class HistoryViewList extends Component {
  static propTypes = {
    voteHistory: PropTypes.object,
  };

  render() {
    const { voteHistory } = this.props;

    if (!size(voteHistory)) {
      return (
        <Text style={styles.sectionText}>
          No Results!
        </Text>
      );
    }

    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Results!
        </Text>
      </View>
    );
  }
}
