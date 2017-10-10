import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

// Styles
import styles from './Styles/LaunchScreenStyles';
import colors from '../Themes/Colors';

export default class LaunchScreen extends Component {
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
              Devtalk vote app!
            </Text>
          </View>
          <View style={styles.section}>
            <Button title="Admin Panel" color={colors.green} onPress={() => navigation.navigate('AdminScreen')} />
          </View>
          <View style={styles.section}>
            <Button title="Vote Screen" color={colors.green} onPress={() => navigation.navigate('VoteScreen')} />
          </View>
          <View style={styles.section}>
            <Button
              title="Vote History"
              color={colors.green}
              onPress={() => navigation.navigate('VoteHistoryScreen')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
