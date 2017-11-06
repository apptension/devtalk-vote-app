import React, { PropTypes, Component } from 'react';
import { Content, Container, Text } from 'native-base';
import { AppHeader } from './../Components/AppHeader';

// Styles
import styles from '../Containers/Styles/VoteScreenStyles';
import colors from '../Themes/Colors';

export class VoteInfo extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: colors.snow }}>
        <AppHeader
          leftSideFn={navigation.goBack}
          leftIcon="arrow-back"
          title="Vote Info"
        />
        <Content>
          <Text style={styles.sectionText}>
            Waiting for the end of voting...
          </Text>
        </Content>
      </Container>
    );
  }
}
