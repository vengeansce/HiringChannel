import React, {useState, useEffect} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {
  H1,
  H3,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Button,
  Icon,
  Container,
  Content,
} from 'native-base';

import axios from 'axios';
import {timeConverter, toastr} from '../helpers/script';
import {API_BASE_URL, API_ENGINEER_ENDPOINT} from 'react-native-dotenv';

function Engineer(props) {
  let [engineer, setEngineer] = useState({
    id: '',
    name: '',
    skills: '',
    salary: '',
    updated: '',
    location: '',
    birthdate: '',
    img: '',
    email: '',
    description: '',
  });

  const id = props.navigation.state.params.id;
  useEffect(() => {
    axios
      .get(`${API_ENGINEER_ENDPOINT}/${id}`)
      .then(res => {
        if (res.data.values.length > 0) {
          setEngineer(res.data.values[0]);
        }
      })
      .catch(() => {
        toastr('Ops, network error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container style={s.background}>
      <Content>
        <ImageBackground
          source={{uri: API_BASE_URL + engineer.img}}
          style={s.img}>
          <View style={[s.p1]}>
            <H1 style={s.textWhite}>{engineer.name}</H1>
            <Text style={s.textWhite}>
              Updated {timeConverter(engineer.updated)}
            </Text>
          </View>
        </ImageBackground>
        <View style={[s.bgWhite]}>
          <H3 style={[s.p1, s.primaryColor]}>Description</H3>
          <List>
            <ListItem style={[s.borderB0, s.pt1]}>
              <Text>{engineer.description}</Text>
            </ListItem>
          </List>
        </View>
        <View style={[s.bgWhite, s.my1]}>
          <H3 style={[s.p1, s.primaryColor]}>Details</H3>
          <ListItem icon>
            <Left>
              <Button style={s.email}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>{engineer.email}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={s.birthdate}>
                <Icon active name="calendar" />
              </Button>
            </Left>
            <Body>
              <Text>{engineer.birthdate.split('T')[0]}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={s.salary}>
                <Icon active name="cash" />
              </Button>
            </Left>
            <Body>
              <Text>${engineer.salary}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={s.location}>
                <Icon active name="pin" />
              </Button>
            </Left>
            <Body style={s.borderB0}>
              <Text>{engineer.location}</Text>
            </Body>
          </ListItem>
        </View>
      </Content>
    </Container>
  );
}

const s = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
    flexDirection: 'column-reverse',
  },
  p1: {padding: 10},
  pt1: {paddingTop: 5},
  pb1: {paddingBottom: 5},
  py1: {paddingVertical: 10},
  my1: {marginVertical: 20},
  fz1: {fontSize: 16},
  textWhite: {color: '#fff'},
  background: {backgroundColor: '#F0EFF5'},
  email: {backgroundColor: '#00a5ff'},
  birthdate: {backgroundColor: '#FD3C2D'},
  salary: {backgroundColor: '#4CDA64'},
  location: {backgroundColor: '#FF9501'},
  bgWhite: {backgroundColor: '#fff'},
  primaryColor: {color: '#007aff'},
  borderB0: {borderBottomWidth: 0},
});

Engineer.navigationOptions = {
  header: null,
};

export default Engineer;
