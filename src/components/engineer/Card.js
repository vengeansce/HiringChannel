import React from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';

export default function Card(props) {
  const {name, skills, updated, img} = props;
  return (
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{uri: img}} />
        </Left>
        <Body>
          <Text>{name}</Text>
          <Text note>{skills}</Text>
        </Body>
        <Right>
          <Text note>{updated}</Text>
        </Right>
      </ListItem>
    </List>
  );
}
