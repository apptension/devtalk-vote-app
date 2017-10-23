import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Button, Content, Container, Text } from 'native-base';
import { AppHeader } from './../Components/AppHeader';

import { AdminCommandsActions } from '../Redux/AdminCommandsRedux';

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
    const { navigation } = this.props;

    return (
      <Container style={{backgroundColor: colors.snow}}>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon='arrow-back'
          title={`Admin Panel`}
        />
        <Content style={styles.content}>
          <Button style={styles.button} onPress={this.handleStartVoteClick}>
            <Text style={styles.buttonText}>Start voting</Text>
          </Button>
          <Button style={styles.button} onPress={this.handleStopVoteClick}>
            <Text style={styles.buttonText}>Stop voting</Text>
          </Button>
        </Content>
    </Container>
    );
  }
}


const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  startVoting: AdminCommandsActions.startVote,
  stopVoting: AdminCommandsActions.stopVote,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
