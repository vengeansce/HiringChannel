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

import {
  fetchEmployee,
  getDataStorage,
  clearSession,
} from '../../helpers/script';
import {API_BASE_URL} from 'react-native-dotenv';
import s from '../../style/Profile';

const Account = props => {
  const {
    navigation: {navigate},
  } = props;
  let [employee, setEmployee] = useState({
    name: '',
    location: '',
    img: '',
    email: '',
    description: '',
  });
  useEffect(() => {
    getDataStorage('id', id => {
      if (id !== null) {
        fetchEmployee(id, data => setEmployee(data));
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
          <Image source={{uri: API_BASE_URL + employee.img}} style={s.img} />
        </View>
        <View>
          <Text>Description</Text>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Description"
              value={employee.description}
              onChangeText={text =>
                setEmployee({...employee, description: text})
              }
            />
          </Form>
        </View>
        <View>
          <Item>
            <Input
              value={employee.name}
              onChangeText={text => setEmployee({...employee, name: text})}
            />
            <Text style={s.pr}>Name</Text>
          </Item>
          <Item>
            <Input
              value={employee.location}
              onChangeText={text => setEmployee({...employee, location: text})}
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
