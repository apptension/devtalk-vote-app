import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';
import * as moment from 'moment';

// Styles
import styles from '../Containers/Styles/LaunchScreenStyles';

export class HistoryViewList extends Component {
  static propTypes = {
    voteHistory: PropTypes.object,
  };

  render() {
    const voteHistory = Object.values(this.props.voteHistory);

    if (!voteHistory.length) {
      return (
        <Text style={styles.sectionText}>
          No Results!
        </Text>
      );
    }

    return (
      <View style={styles.section}>
        {voteHistory.map((item, index) => (
          <View key={index} style={styles.section}>
            <Text>
              Date: {moment.unix(item.date).format('MMMM Do YYYY, H:mm:ss')}
            </Text>
            <Text>
              Score: {item.score}
            </Text>
            <Text>
              Voters: {item.votersCount}
            </Text>
          </View>

        ))}
      </View>
    );
  }
}
