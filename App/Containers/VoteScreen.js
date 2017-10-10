import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

// Styles
import styles from './Styles/VoteScreenStyles';
import colors from '../Themes/Colors';

export class VoteScreenComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    onVote: PropTypes.func.isRequired,
  };

  handleVoteClick = (value) => {
    const { onVote } = this.props;
    console.log(value);
    onVote(value);
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Vote Screen
            </Text>
          </View>
          <View style={styles.voteContainer}>
            <TouchableHighlight style={styles.voteButton} onPress={() => this.handleVoteClick(1)} underlayColor="orange">
              <View>
                <Text>1</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.voteButton} onPress={() => this.handleVoteClick(2)} underlayColor="orange">
              <View>
                <Text>2</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.voteButton} onPress={() => this.handleVoteClick(3)} underlayColor="orange">
              <View>
                <Text>3</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.voteButton} onPress={() => this.handleVoteClick(4)} underlayColor="orange">
              <View>
                <Text>4</Text>
              </View>
            </TouchableHighlight>
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
