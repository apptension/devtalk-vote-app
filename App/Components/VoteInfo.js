import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from '../Containers/Styles/VoteScreenStyles';

export class VoteInfo extends Component {
  render() {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Waiting for poll end.
        </Text>
      </View>
    );
  }
}
