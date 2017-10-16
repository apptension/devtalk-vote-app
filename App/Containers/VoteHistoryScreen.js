import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

//Views
import { HistoryViewList } from '../Components/HistoryViewList';

//Selectors
import { selectVoteHistory } from '../Selectors/VoteHistorySelector';

//Actions
import { VoteHistoryActions } from '../Redux/VoteHistoryRedux';

// Styles
import styles from './Styles/VoteHistoryScreenStyles';
import colors from '../Themes/Colors';

class VoteHistoryScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchVoteHistory: PropTypes.func.isRequired,
    voteHistory: PropTypes.object,
  };

  componentDidMount() {
    this.props.fetchVoteHistory();
  }

  render() {
    const { navigation, voteHistory } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Vote History!
            </Text>
          </View>
          <HistoryViewList voteHistory={voteHistory} />
          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  voteHistory: selectVoteHistory,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchVoteHistory: VoteHistoryActions.fetchVoteHistory,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VoteHistoryScreen);
