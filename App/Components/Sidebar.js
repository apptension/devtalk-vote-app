import React, { Component } from 'react';
import {Container, Content, Header, List, ListItem, Text} from 'native-base';

export default class Sidebar extends Component {
  render() {
    const {isAdmin, navigation} = this.props;
    return (
      <Container style={{backgroundColor:'#fff'}}>
        <Header style={{backgroundColor:'#3fc133', height: 150, display: 'flex', alignItems: 'center'}}>
          <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>Devtalk Vote App</Text>
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
