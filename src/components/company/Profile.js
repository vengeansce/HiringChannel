import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {
  Container,
  Text,
  Content,
  Header,
  Body,
  Right,
  Title,
  Item,
  Input,
  Form,
  Textarea,
  Button,
} from 'native-base';
import Footer from '../Footer';

import {fetchCompany, getDataStorage, clearSession} from '../../helpers/script';
import {API_BASE_URL} from 'react-native-dotenv';
import s from '../../style/Profile';

const Account = props => {
  const {
    navigation: {navigate},
  } = props;
  let [company, setCompany] = useState({
    name: '',
    location: '',
    img: '',
    email: '',
    description: '',
  });
  useEffect(() => {
    getDataStorage('id', id => {
      if (id !== null) {
        fetchCompany(id, data => setCompany(data));
      } else {
        navigate('Login');
      }
    });
  }, [navigate]);
  return (
    <Container>
      <Header>
        <Body>
          <Title>Account Settings</Title>
        </Body>
        <Right>
          <Button
            hasText
            danger
            transparent
            onPress={() => clearSession(() => navigate('Login'))}>
            <Text>Logout</Text>
          </Button>
        </Right>
      </Header>
      <Content style={s.px}>
        <View style={[s.centerX, s.py2]}>
          <Image source={{uri: API_BASE_URL + company.img}} style={s.img} />
        </View>
        <View>
          <Text>Description</Text>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Description"
              value={company.description}
              onChangeText={text => setCompany({...company, description: text})}
            />
          </Form>
        </View>
        <View>
          <Item>
            <Input
              value={company.name}
              onChangeText={text => setCompany({...company, name: text})}
            />
            <Text style={s.pr}>Name</Text>
          </Item>
          <Item>
            <Input
              value={company.location}
              onChangeText={text => setCompany({...company, location: text})}
            />
            <Text style={s.pr}>Address</Text>
          </Item>
        </View>
        <View style={s.px2}>
          <Button success block style={s.my}>
            <Text>Update</Text>
          </Button>
          <Button
            danger
            block
            style={s.my}
            onPress={() => alert('Eits, tidak bisa!')}>
            <Text>Delete Account</Text>
          </Button>
        </View>
      </Content>
      <Footer active="account" {...props} />
    </Container>
  );
};

export default Account;
