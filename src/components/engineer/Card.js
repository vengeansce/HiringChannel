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
    <List style={[style.my2, style.px2]}>
      <ListItem avatar style={[style.list]}>
        <Left style={[style.center, style.hFull, style._pt]}>
          <Thumbnail source={{uri: img}} style={style._ml_1} />
        </Left>
        <Body style={style.noBorder}>
          <Text>{name}</Text>
          <Text note>{skills}</Text>
          <View style={style.flex}>
            <Text note style={[style.w1_2, style._mr]}>
              {updated}
            </Text>
            <Text note style={[style.w1_2, style.textRight, style._mr]}>
              ${salary}
            </Text>
          </View>
        </Body>
        <Right style={[style.noBorder, style.center, style._pr]}>
          <Icon
            name="arrow-dropright-circle"
            style={[style.fz3, style._mr_1]}
          />
        </Right>
      </ListItem>
    </List>
  );
}

const mx = 17;

const style = StyleSheet.create({
  red: {backgroundColor: 'red'},
  list: {
    marginRight: mx,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRight: {textAlign: 'right'},
  flex: {flex: 1, flexDirection: 'row'},
  hFull: {height: '100%'},
  w1_2: {width: '50%'},
  px2: {paddingHorizontal: mx},
  my2: {marginVertical: 10},
  _pt: {paddingTop: 0},
  _pr: {paddingRight: 0},
  _ml_1: {marginLeft: -mx},
  _mr_1: {marginRight: -mx},
  _mr: {marginRight: 0},
  fz3: {fontSize: 36},
  noBorder: {borderBottomWidth: 0},
});
