import React, { PropTypes, Component } from 'react';
import { Container, Text } from 'native-base';

import colors from '../Themes/Colors';

export class AppBody extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool,
  };

  render() {

    const { isAdmin } = this.props;

    return (
      <Container style={{backgroundColor: colors.snow, padding: 20}}>
        <Text>Devtalk Vote App</Text>
      </Container>
    );
  }
}
