import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import styles from './Styles/AppBodyStyles';

export class AppBody extends Component {
  render() {
    return (
      <Container style={styles.container} >
        <Text>Devtalk Vote App</Text>
      </Container>
    );
  }
}
