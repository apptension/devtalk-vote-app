import React, { PropTypes, Component } from 'react';
import { Body, Content, List, ListItem, Text, Right, Icon } from 'native-base';

import moment from 'moment';

// Styles
import styles from '../Containers/Styles/LaunchScreenStyles';

export class HistoryViewList extends Component {
  static propTypes = {
    voteHistory: PropTypes.array,
  };

  render() {
    const { voteHistory } = this.props;

    if (!voteHistory.length) {
      return (
        <Text style={styles.sectionText}>
          No Results!
        </Text>
      );
    }

    return (
      <List style={styles.list}>
        {voteHistory.map((item, index) => (
          <ListItem key={index} style={styles.item}>
            <Body style={styles.itemBody}>
              <Content>
                <Icon active name="trophy" style={styles.icon} />
                <Text>{item.score}</Text>
              </Content>
              <Content>
                <Icon active name="person" style={styles.icon} />
                <Text>{item.votersCount}</Text>
              </Content>
            </Body>
            <Right>
              <Text note style={styles.itemDate}>
                {moment.unix(item.date).format('DD.MM.YYYY HH:mm:ss')}
              </Text>
            </Right>
          </ListItem>
        ))}
      </List>
    );
  }
}
