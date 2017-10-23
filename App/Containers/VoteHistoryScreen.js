import React, { PropTypes, Component } from 'react';
import { Header, Text, Button, Content, Container, Left, Right, Icon, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

//Views
import { HistoryViewList } from '../Components/HistoryViewList';
import {AppHeader} from '../Components/AppHeader';

//Selectors
import { selectSortedVoteHistory } from '../Selectors/VoteHistorySelector';

//Actions
import { VoteHistoryActions } from '../Redux/VoteHistoryRedux';

// Styles
import styles from './Styles/VoteHistoryScreenStyles';
import colors from '../Themes/Colors';

class VoteHistoryScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchVoteHistory: PropTypes.func.isRequired,
    voteHistory: PropTypes.array,
  };

  componentDidMount() {
    this.props.fetchVoteHistory();
  }

  render() {
    const { navigation, voteHistory } = this.props;

    return (
      <Container style={{backgroundColor: colors.snow}}>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon='arrow-back'
          title='Vote History'
        />
        <Content>
          <HistoryViewList voteHistory={voteHistory} />
        </Content>
      </Container>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  voteHistory: selectSortedVoteHistory,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchVoteHistory: VoteHistoryActions.fetchVoteHistory,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VoteHistoryScreen);
