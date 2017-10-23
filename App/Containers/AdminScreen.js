import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Button, Content, Container, Text } from 'native-base';

import { AdminCommandsActions } from '../Redux/AdminCommandsRedux';
import { VotingActions, POLL_STATUS_ACTIVE } from '../Redux/VotingRedux';

import { selectStatus } from '../Selectors/VotingSelectors';

import { AppHeader } from './../Components/AppHeader';

import styles from './Styles/AdminScreenStyles';
import colors from '../Themes/Colors';

class AdminScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    startVoting: PropTypes.func.isRequired,
    stopVoting: PropTypes.func.isRequired,
  };

  handleStartVoteClick = () => {
    this.props.startVoting();
  };

  handleStopVoteClick = () => {
    this.props.stopVoting();
  };

  render() {
    const { navigation, status } = this.props;

    return (
      <Container style={{backgroundColor: colors.snow}}>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon='arrow-back'
          title={`Admin Panel`}
        />
        <Content style={styles.content}>
          <Button style={styles.button} onPress={this.handleStartVoteClick} disabled={status === POLL_STATUS_ACTIVE}>
            <Text style={styles.buttonText}>Start voting</Text>
          </Button>
          <Button style={styles.button} onPress={this.handleStopVoteClick} disabled={status !== POLL_STATUS_ACTIVE}>
            <Text style={styles.buttonText}>Stop voting</Text>
          </Button>
        </Content>
    </Container>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  status: selectStatus,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  startVoting: AdminCommandsActions.startVote,
  stopVoting: AdminCommandsActions.stopVote,
  getStatus: VotingActions.getStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
