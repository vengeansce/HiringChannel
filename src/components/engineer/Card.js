import React from 'react';
import {StyleSheet, View} from 'react-native';
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

export default function Card(props) {
  const {name, skills, updated, salary, img} = props;
  return (
    <List style={[style.my2, style.list, style.mx2]}>
      <ListItem avatar>
        <Left style={[style.center, style.hFull]}>
          <Thumbnail source={{uri: img}} />
        </Left>
        <Body style={style.noBorder}>
          <Text>{name}</Text>
          <Text note>{skills}</Text>
          <View style={style.flex}>
            <Text note style={style.w1_2}>
              {updated}
            </Text>
            <Text note style={style.w1_2}>
              ${salary}
            </Text>
          </View>
        </Body>
        <Right style={[style.noBorder, style.center]}>
          <Icon name="arrow-dropright-circle" style={{fontSize: 36}} />
        </Right>
      </ListItem>
    </List>
  );
}

const style = StyleSheet.create({
  red: {backgroundColor: 'red'},
  list: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {display: 'flex', backgroundColor: 'red'},
  hFull: {height: '100%'},
  w1_2: {width: '50%'},
  mx2: {marginHorizontal: 10},
  my2: {marginVertical: 10},
  noBorder: {borderBottomWidth: 0},
});
