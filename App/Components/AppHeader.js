import React, { PropTypes, Component } from 'react';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';


export class AppHeader extends Component {
  render() {
    const { leftSideFn, leftIcon, rightSideFn, rightIcon, title } = this.props;

    return (
      <Header>
        <Left>
        {
          leftSideFn ?
              <Button transparent onPress={() => leftSideFn()} >
                <Icon name={leftIcon} style={{ color: '#3fc133' }}/>
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
                 <Icon name={rightIcon} style={{ color: '#3fc133' }}/>
               </Button>
           :
             null
        }
        </Right>
      </Header>
    );
  }
}
