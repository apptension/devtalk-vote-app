import React, { PropTypes, Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

//Views
import { VoteButtons } from '../Components/VoteButtons';
import { VoteInfo } from '../Components/VoteInfo';
import { VoteResults } from '../Components/VoteResults';

// Selectors
import { selectStatus } from '../Selectors/VotingSelectors';
import { selectFirstSortedElement } from '../Selectors/VoteHistorySelector';

// Redux
import { VoteHistoryActions } from '../Redux/VoteHistoryRedux';
import { VotingActions, POLL_STATUS_ACTIVE, POLL_STATUS_IDLE, POLL_STATUS_SUMMARY } from '../Redux/VotingRedux';

// Styles
import styles from './Styles/VoteScreenStyles';
import { selectUserUid } from '../Selectors/UserAuthSelector';

export class VoteScreenComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired,
    fetchVoteHistory: PropTypes.func.isRequired,
    status: PropTypes.string,
    result: PropTypes.object,
    uid: PropTypes.string,
  };

  componentWillMount() {
    this.props.getStatus(this.props.uid);
  }

  getComponent() {
    const { status, onVote, uid, result, fetchVoteHistory, navigation } = this.props;
    const componentMap = {
      [POLL_STATUS_IDLE]: <VoteInfo navigation={navigation} />,
      [POLL_STATUS_SUMMARY]:
        <VoteResults result={result} fetchVoteHistory={fetchVoteHistory} navigation={navigation} />,
      [POLL_STATUS_ACTIVE]: <VoteButtons status={status} onVote={onVote} uid={uid} navigation={navigation} />,
    };

    return componentMap[status] || null;
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          { this.getComponent() }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  status: selectStatus,
  uid: selectUserUid,
  result: selectFirstSortedElement,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onVote: VotingActions.sendVote,
  getStatus: VotingActions.getStatus,
  fetchVoteHistory: VoteHistoryActions.fetchVoteHistory,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreenComponent);
