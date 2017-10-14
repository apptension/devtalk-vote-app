import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createStructuredSelector } from 'reselect';

import { selectIsPollAvailable, selectPoll, selectVote } from '../Selectors/VotingSelectors';

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

  handleVoteClick = (value) => {
    const { onVote } = this.props;
    console.log(value);
    // onVote(value);
  };

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
    console.log(vote);
    console.log(poll);
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Poll Status - {poll.status}
              {"\n"}
              Vote Status - {vote.status}
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

const mapDispatchToProps = (dispatch) => ({
  onVote: (value) => {alert(`Zaglosowales: ${value}`);}
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreenComponent);
