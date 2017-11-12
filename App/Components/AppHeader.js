import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { Body, Button, Header, Icon, Title, Drawer } from 'native-base';
import styles from './Styles/AppHeaderStyles';
import Sidebar from './../Components/Sidebar';
import { AdminListActions } from '../Redux/AdminListRedux';
import { selectIsAdmin } from '../Selectors/AdminListSelector';
import { selectSavedUserData, selectIsUserAuthenticated } from '../Selectors/UserAuthSelector';

export class AppHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object.isRequired,
    fetchAdminList: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      this.props.fetchAdminList(nextProps.isAuthenticated);
    }
  }

  openDrawer() {
    this.drawer._root.open();
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  render() {
    const { navigation, isAdmin, title } = this.props;

    return (
      <Drawer
        type="displace"
        tapToClose={true}
        content={<Sidebar isAdmin={isAdmin} navigation={navigation} />}
        ref={(ref) => {this.drawer = ref;}}
        openDrawerOffset={100}
      >
        <Header>
          <Button transparent onPress={this.openDrawer.bind(this)}>
            <Icon name="menu" style={styles.icon} />
          </Button>
          <Body><Title>{title}</Title>
          </Body>
        </Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
