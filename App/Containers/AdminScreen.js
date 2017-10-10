import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

// Styles
import styles from './Styles/AdminScreenStyles';
import colors from '../Themes/Colors';

export default class AdminScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  startVote() {

  }

  stopVote() {

  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Admin Screen
            </Text>
          </View>
          <View style={styles.section}>
            <Button title="Start Vote" color={colors.green} onPress={this.startVote} />
            <Button title="Stop Vote" color={colors.green} onPress={this.stopVote} />
          </View>
          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
