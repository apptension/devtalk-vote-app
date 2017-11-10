import React, { PropTypes, Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

// Styles
import styles, { VOTE_BUTTON_COLOR } from '../Containers/Styles/VoteScreenStyles';
import { AppHeader } from './../Components/AppHeader';

export class VoteButtons extends Component {
  static propTypes = {
    onVote: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
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
    const { navigation } = this.props;

    return (
      <Container>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon="arrow-back"
          title="Vote now"
        />
        <View style={styles.voteContainer}>
          { this.generateButtons() }
        </View>
      </Container>
    );
  }
}
