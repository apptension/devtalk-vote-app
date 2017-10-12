import React, { PropTypes, Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

//Views
import { AdminPanelButton } from '../Components/AdminPanelButton';

//Selectors
import { selectAdminList } from '../Selectors/LaunchScreenSelector';
import { selectSavedUserData, selectIsUserAuth } from '../Selectors/UserAuthSelector';

//Actions
import { AdminListActions } from '../Redux/AdminListRedux';

// Styles
import styles from './Styles/LaunchScreenStyles';
import colors from '../Themes/Colors';


class LaunchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchAdminList: PropTypes.func.isRequired,
    userData: PropTypes.object,
    isAuth: PropTypes.bool,
    adminList: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth !== this.props.isAuth && nextProps.isAuth) {
      this.props.fetchAdminList(nextProps.isAuth);
    }
  }

  render() {
    const { navigation, userData, adminList } = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Devtalk vote app!
            </Text>
          </View>
          <AdminPanelButton navigation={navigation} uid={userData.uid} adminList={adminList} />
          <View style={styles.section}>
            <Button title="Vote Screen" color={colors.green} onPress={() => navigation.navigate('VoteScreen')} />
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
  adminList: selectAdminList,
  userData: selectSavedUserData,
  isAuth: selectIsUserAuth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchAdminList: AdminListActions.fetchAdminList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
