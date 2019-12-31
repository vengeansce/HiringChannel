import React from 'react';
import {View} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon,
} from 'native-base';

import s from './style';

export default function Card(props) {
  const {name, skills, updated, salary, img} = props;
  return (
    <List style={[s.my2, s.px2]}>
      <ListItem avatar style={[s.list]}>
        <Left style={[s.center, s.hFull, s._pt]}>
          <Thumbnail source={{uri: img}} style={[s._ml_1, s.avatar]} />
        </Left>
        <Body style={s.noBorder}>
          <Text>{name}</Text>
          <Text note>{skills}</Text>
          <View style={s.flex}>
            <Text note style={[s.w1_2, s._mr]}>
              {updated}
            </Text>
            <Text note style={[s.w1_2, s.textRight, s._mr]}>
              ${salary}
            </Text>
          </View>
        </Body>
        <Right style={[s.noBorder, s.center, s._pr]}>
          <Icon
            name="arrow-dropright-circle"
            style={[s.fz3, s._mr_1, s.primaryColor]}
          />
        </Right>
      </ListItem>
    </List>
  );
}
