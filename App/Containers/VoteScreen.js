import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { selectPoll, selectVote } from '../Selectors/VotingSelectors';
import { VotingActions, VOTE_STATUS_VOTED, POLL_STATUS_SUMMARY } from '../Redux/VotingRedux';

// Styles
import styles, { VOTE_BUTTON_COLOR } from './Styles/VoteScreenStyles';
import colors from '../Themes/Colors';
import {selectSavedUserData} from "../Selectors/UserAuthSelector";

export class VoteScreenComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    poll: PropTypes.object.isRequired,
    vote: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
    onClosePoll: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
  };

  votePoints = [1, 2, 3, 4];

  handleVoteClick = (value) => {
    const {uid} = this.props.userData
    this.props.onVote(uid,value);
  };

  generateButtons = (points) =>
    points.map((vote, index) => {
      const color = VOTE_BUTTON_COLOR.clone().darken(4 * index);
      const highlightColor = color.clone().lighten(4);
      const buttonStyle = StyleSheet.create({
        button: {
          backgroundColor: color.toString(),
        },
      });

      return (
        <TouchableHighlight
          style={[styles.voteButton, buttonStyle.button]}
          onPress={() => this.handleVoteClick(vote)}
          underlayColor={highlightColor.toString()}
          key={index}
        >
          <View>
            <Text style={styles.buttonText}>{ vote }</Text>
          </View>
        </TouchableHighlight>
      );
    });

  alreadyVoted = () => {
    const { vote } = this.props;
    return vote.status === VOTE_STATUS_VOTED;
  };

  renderVoteButtons = () => {
    const { poll } = this.props;
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Vote now - {poll.status}
          </Text>
        </View>
        <View style={styles.voteContainer}>
          { this.generateButtons(this.votePoints) }
        </View>
      </View>
    );
  };


  renderVoteInfo = () => {
    const { vote } = this.props;
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Your vote: {vote.value}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Waiting for poll end.
          </Text>
        </View>
      </View>
    );
  };

  renderResults = () => {
    const { poll } = this.props;
    let results = poll.results.asMutable();
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Poll results
          </Text>
          <Text style={styles.total}>Total: {poll.total}</Text>
        </View>
        <View style={styles.resultsList}>
          { Object.keys(results).map((point, index) => (
            <Text key={index} style={styles.resultLine}>
              <Text style={styles.votePoints}>{point} points - </Text>
              <Text style={styles.voteQuantity}>{results[point]} votes{'\n'}</Text>
            </Text>
          )) }
        </View>
      </View>
    );
  };

  render() {
    const { navigation, poll, onClosePoll } = this.props;
    let content = null;
    if (poll.status === POLL_STATUS_SUMMARY) {
      content = this.renderResults();
    } else {
      content = this.alreadyVoted() ? this.renderVoteInfo() : this.renderVoteButtons();
    }
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          { content }

          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.section}>
            <Button title="close Poll" color={colors.green} onPress={() => onClosePoll()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  poll: selectPoll,
  vote: selectVote,
  userData: selectSavedUserData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onVote: VotingActions.sendVote,
  onClosePoll: VotingActions.closePoll,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreenComponent);
