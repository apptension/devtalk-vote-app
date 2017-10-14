import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

//Views
import { AdminPanelButton } from '../Components/AdminPanelButton';

//Selectors
import { selectIsAdmin } from '../Selectors/AdminListSelector';
import { selectSavedUserData, selectIsUserAuthenticated } from '../Selectors/UserAuthSelector';
import { selectIsPollAvailable } from '../Selectors/VotingSelectors';

//Actions
import { AdminListActions } from '../Redux/AdminListRedux';

// Styles
import styles from './Styles/LaunchScreenStyles';
import colors from '../Themes/Colors';


class LaunchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchAdminList: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    isPollAvailable: PropTypes.bool,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      this.props.fetchAdminList(nextProps.isAuthenticated);
    }
  }

  getVoteButtonText = () => (this.props.isPollAvailable ? 'Vote Screen' : 'Vote Screen - waiting for start');

  render() {
    const { navigation, isAdmin, isPollAvailable } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Devtalk vote app!
            </Text>
          </View>
          <AdminPanelButton navigation={navigation} isAdmin={isAdmin} />
          <View style={styles.section}>
            <Button
              title={this.getVoteButtonText()}
              color={colors.green}
              onPress={() => navigation.navigate('VoteScreen')}
              disabled={!isPollAvailable}
            />
          </View>
          <View style={styles.section}>
            <Button
              title="Vote History"
              color={colors.green}
              onPress={() => navigation.navigate('VoteHistoryScreen')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userData: selectSavedUserData,
  isAuthenticated: selectIsUserAuthenticated,
  isAdmin: selectIsAdmin(selectSavedUserData),
  isPollAvailable: selectIsPollAvailable,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchAdminList: AdminListActions.fetchAdminList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
