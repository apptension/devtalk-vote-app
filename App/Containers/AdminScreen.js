import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

//Actions
import { AdminCommandsActions } from '../Redux/AdminCommandsRedux';

// Styles
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
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Admin Screen
            </Text>
          </View>
          <View style={styles.section}>
            <Button title="Start Vote" color={colors.green} onPress={this.handleStartVoteClick} />
            <Button title="Stop Vote" color={colors.green} onPress={this.handleStopVoteClick} />
          </View>
          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
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
