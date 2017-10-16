import React, { PropTypes, Component } from 'react';
import { ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

//Views
import { VoteButtons } from '../Components/VoteButtons';
import { VoteInfo } from '../Components/VoteInfo';
import { VoteResults } from '../Components/VoteResults';

// Selectors
import { selectStatus } from '../Selectors/VotingSelectors';
import { VotingActions, POLL_STATUS_ACTIVE, POLL_STATUS_IDLE, POLL_STATUS_SUMMARY } from '../Redux/VotingRedux';

// Styles
import styles from './Styles/VoteScreenStyles';
import colors from '../Themes/Colors';
import { selectUserUid } from '../Selectors/UserAuthSelector';

export class VoteScreenComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired,
    status: PropTypes.string,
    uid: PropTypes.string,
  };

  componentWillMount() {
    this.props.getStatus(this.props.uid);
  }

  getComponent() {
    const { status, onVote } = this.props;
    const componentMap = {
      [POLL_STATUS_IDLE]: <VoteInfo />,
      [POLL_STATUS_SUMMARY]: <VoteResults />,
      [POLL_STATUS_ACTIVE]: <VoteButtons status={status} onVote={onVote} />,
    };

    return componentMap[status] || null;
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          { this.getComponent() }
          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  status: selectStatus,
  uid: selectUserUid,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onVote: VotingActions.sendVote,
  getStatus: VotingActions.getStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreenComponent);
