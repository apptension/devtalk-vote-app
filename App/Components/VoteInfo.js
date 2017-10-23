import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Body, Button, Content, Container, Header, Title, Icon } from 'native-base';
import {AppHeader} from './../Components/AppHeader';

// Styles
import styles from '../Containers/Styles/VoteScreenStyles';

export class VoteInfo extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon='arrow-back'
          title='Vote Info'
        />
        <Content>
          <Text style={styles.sectionText}>
            Waiting for poll end.
          </Text>
        </Content>
      </Container>
    );
  }
}
