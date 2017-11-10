import React, { PropTypes, Component } from 'react';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import styles from './Styles/AppHeaderStyles';

export class AppHeader extends Component {
  static propTypes = {
    leftSideFn: PropTypes.func,
    rightSideFn: PropTypes.func,
    title: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
  };

  render() {
    const { leftSideFn, leftIcon, rightSideFn, rightIcon, title } = this.props;

    return (
      <Header>
        <Left>
          {
            leftSideFn ?
              <Button transparent onPress={() => leftSideFn()} >
                <Icon name={leftIcon} style={styles.icon} />
              </Button>
              :
              null
          }
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {
            rightSideFn ?
              <Button transparent onPress={() => rightSideFn()}>
                <Icon name={rightIcon} style={styles.icon} />
              </Button>
              :
              null
          }
        </Right>
      </Header>
    );
  }
}
