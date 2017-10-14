import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

// Styles
import styles, { VOTE_BUTTON_COLOR } from './Styles/VoteScreenStyles';
import colors from '../Themes/Colors';

export class VoteScreenComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
  };

  votePoints = [1,2,3,4];

  handleVoteClick = (value) => {
    const { onVote } = this.props;
    console.log(value);
    // onVote(value);
  };

  render() {
    const { navigation } = this.props;

    const buttons  = this.votePoints.map((vote, index) => {
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
      )});

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Vote Screen
            </Text>
          </View>
          <View style={styles.voteContainer}>
            { buttons }
          </View>
          <View style={styles.section}>
            <Button title="Back" color={colors.green} onPress={() => navigation.goBack()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onVote: (value) => {alert(`Zaglosowales: ${value}`);}
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteScreenComponent);
