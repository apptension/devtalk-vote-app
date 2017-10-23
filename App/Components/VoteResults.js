import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { AppHeader } from './../Components/AppHeader';
import { Content, Container} from 'native-base';

// Styles
import styles from '../Containers/Styles/VoteScreenStyles';

export class VoteResults extends Component {
  static propTypes = {
    fetchVoteHistory: PropTypes.func.isRequired,
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
      <Container>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon='arrow-back'
          title={`Results`}
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
