import React, { PropTypes, Component } from 'react';
import { Drawer } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsAdmin } from '../Selectors/AdminListSelector';
import { selectSavedUserData, selectIsUserAuthenticated } from '../Selectors/UserAuthSelector';

import { AdminListActions } from '../Redux/AdminListRedux';

import {AppHeader} from './../Components/AppHeader';
import {AppBody} from './../Components/AppBody';
import Sidebar from './../Components/Sidebar';

class MainScreen extends Component {
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

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    const { navigation, isAdmin } = this.props;

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar isAdmin={isAdmin} navigation={navigation}/>}
        onClose={() => this.closeDrawer()} >
        <AppHeader
          leftSideFn={this.openDrawer.bind(this)}
          leftIcon='menu'
          title='DevtalkVotes'
        />
        <AppBody />
      </Drawer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userData: selectSavedUserData,
  isAuthenticated: selectIsUserAuthenticated,
  isAdmin: selectIsAdmin(selectSavedUserData),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchAdminList: AdminListActions.fetchAdminList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
