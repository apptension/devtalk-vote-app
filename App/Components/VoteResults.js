import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from '../Containers/Styles/VoteScreenStyles';

export class VoteResults extends Component {
  render() {
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Poll results
          </Text>
        </View>
      </View>
    );
  }
}
