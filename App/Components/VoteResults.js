import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { Container } from 'native-base';
import { AppHeader } from './../Components/AppHeader';

// Styles
import styles from '../Containers/Styles/VoteScreenStyles';
import colors from '../Themes/Colors';

export class VoteResults extends Component {
  static propTypes = {
    fetchVoteHistory: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    result: PropTypes.object,
  };

  componentDidMount() {
    if (!this.props.result) {
      this.props.fetchVoteHistory();
    }
  }

  render() {
    const { navigation, result } = this.props;

    if (!result) {
      return null;
    }

    return (
      <Container style={{ backgroundColor: colors.snow }}>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon="arrow-back"
          title="Results"
        />
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Date: {moment.unix(result.date).format('DD-MM-YYYY, H:mm:ss')}
          </Text>
          <Text style={styles.sectionText}>
            Score: {`${result.score}`}
          </Text>
          <Text style={styles.sectionText}>
            Voters: {`${result.votersCount}`}
          </Text>
        </View>
      </Container>
    );
  }
}
