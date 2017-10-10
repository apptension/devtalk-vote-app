import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

// Styles
import styles from './Styles/VoteHistoryScreenStyles';
import colors from '../Themes/Colors';

export default class VoteHistoryScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Vote History!
            </Text>
          </View>
          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
