import React, { PropTypes, Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

// Styles
import styles, { VOTE_BUTTON_COLOR } from '../Containers/Styles/VoteScreenStyles';

export class VoteButtons extends Component {
  static propTypes = {
    onVote: PropTypes.func.isRequired,
    status: PropTypes.string,
    uid: PropTypes.string,
  };

  handleVoteClick = (value) => {
    this.props.onVote(this.props.uid, value);
  };

  generateButtons() {
    const votePointsArray = [1, 2, 3, 4];

    return votePointsArray.map((vote, index) => {
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
  }

  render() {
    const { status } = this.props;

    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Vote now - {status}
          </Text>
        </View>
        <View style={styles.voteContainer}>
          { this.generateButtons() }
        </View>
      </View>
    );
  }
}
