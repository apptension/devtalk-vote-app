import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Button, Content, Container, Text } from 'native-base/src';

import { AdminCommandsActions } from '../Redux/AdminCommandsRedux';
import { VotingActions } from '../Redux/VotingRedux';

import { selectStatus } from '../Selectors/VotingSelectors';

import { AppHeader } from './../Components/AppHeader';

import styles from './Styles/AdminScreenStyles';
import colors from '../Themes/Colors';

class AdminScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    startVoting: PropTypes.func.isRequired,
    stopVoting: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired,
    status: PropTypes.string,
    uid: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isActiveVoting: false,
    };
  }

  componentWillMount() {
    this.props.getStatus(this.props.uid);

    this.setState({
      isActiveVoting: this.props.status === 'active' || this.props.status === 'idle',
    });
  }

  handleStartVoteClick = () => {
    this.props.startVoting();

    this.setState({
      isActiveVoting: true,
    });
  };

  handleStopVoteClick = () => {
    this.props.stopVoting();

    this.setState({
      isActiveVoting: false,
    });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: colors.snow }}>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon="arrow-back"
          title="Admin Panel"
        />
        <Content style={styles.content}>
          <Button style={this.state.isActiveVoting ? styles.buttonDisabled : styles.button}
            onPress={this.handleStartVoteClick} disabled={this.state.isActiveVoting}
          >
            <Text style={styles.buttonText}>Start voting</Text>
          </Button>
          <Button style={!this.state.isActiveVoting ? styles.buttonDisabled : styles.button}
            onPress={this.handleStopVoteClick} disabled={!this.state.isActiveVoting}
          >
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
  getStatus: VotingActions.getStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
