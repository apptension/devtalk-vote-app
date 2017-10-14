import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createStructuredSelector } from 'reselect';
import {bindActionCreators} from "redux";

import { selectIsPollAvailable, selectPoll, selectVote } from '../Selectors/VotingSelectors';
import { VotingActions } from '../Redux/VotingRedux';

// Styles
import styles, { VOTE_BUTTON_COLOR } from './Styles/VoteScreenStyles';
import colors from '../Themes/Colors';

export class VoteScreenComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    poll: PropTypes.object.isRequired,
    vote: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
  };

  votePoints = [1,2,3,4];

  handleVoteClick = (value) => { this.props.onVote(value); };

  generateButtons = (points) => {
    return points.map((vote, index) => {
      const color = VOTE_BUTTON_COLOR.clone().darken(4*index);
      const highlightColor = color.clone().lighten(4);
      const buttonStyle = StyleSheet.create({
        button: {
          backgroundColor: color.toString(),
        }
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
  };

  render() {
    const { navigation, poll, vote } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Poll Status - {poll.status}
              {"\n"}
              Vote Status - {vote.status}
              {"\n"}
              Your Vote - {vote.value}
            </Text>
          </View>
          <View style={styles.voteContainer}>
            { this.generateButtons(this.votePoints) }
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
  poll: selectPoll,
  vote: selectVote,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onVote: VotingActions.sendVote,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreenComponent);
