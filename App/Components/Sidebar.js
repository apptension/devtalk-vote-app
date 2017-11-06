import React, { PropTypes, Component } from 'react';
import { Container, Content, Header, List, ListItem, Text } from 'native-base';
import styles from '../Components/Styles/SidebarStyles';

export default class Sidebar extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool,
  };

  render() {
    const { isAdmin, navigation } = this.props;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.headerText}>Devtalk Vote App</Text>
        </Header>
        <Content>
          <List>
            <ListItem onPress={() => navigation.navigate('VoteScreen')}>
              <Text>Dashboard</Text>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('VoteHistoryScreen')}>
              <Text>History</Text>
            </ListItem>
            {
              !isAdmin ?
                <ListItem onPress={() => navigation.navigate('AdminScreen')}>
                  <Text>Admin Panel</Text>
                </ListItem>
                : null
            }
          </List>
        </Content>
      </Container>
    );
  }
}
