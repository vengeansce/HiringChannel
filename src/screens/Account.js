import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
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
import Footer from '../components/Footer';

import {
  fetchEngineer,
  fetchEmployee,
  getDataStorage,
  clearSession,
} from '../helpers/script';
import {API_BASE_URL} from 'react-native-dotenv';

const s = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  centerX: {alignItems: 'center'},
  my: {marginVertical: 10},
  py2: {paddingVertical: 20},
  px: {paddingHorizontal: 10},
  px2: {paddingHorizontal: 20},
  pr: {paddingRight: 5},
});

const EngineerAccount = props => {
  const {
    navigation: {navigate},
  } = props;
  let [engineer, setEngineer] = useState({
    name: '',
    skills: '',
    salary: '',
    location: '',
    birthdate: '',
    img: '',
    description: '',
  });
  getDataStorage('id', id => {
    if (id !== null) {
      fetchEngineer(id, data => setEngineer(data));
    } else {
      navigate('Login');
    }
  });
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
          <Image source={{uri: API_BASE_URL + engineer.img}} style={s.img} />
        </View>
        <View>
          <Text>About Me</Text>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Description"
              value={engineer.description}
            />
          </Form>
        </View>
        <View>
          <Item>
            <Input value={engineer.name} />
            <Text style={s.pr}>Name</Text>
          </Item>
          <Item>
            <Input value={engineer.skills} />
            <Text style={s.pr}>Skills</Text>
          </Item>
          <Item>
            <Input value={engineer.birthdate.split('T')[0]} />
            <Text style={s.pr}>Birthdate</Text>
          </Item>
          <Item>
            <Input value={`$${engineer.salary}`} />
            <Text style={s.pr}>Salary</Text>
          </Item>
          <Item>
            <Input value={engineer.location} />
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

const EmployeeAccount = props => {
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
  getDataStorage('id', id => {
    if (id !== null) {
      fetchEmployee(id, data => setEmployee(data));
    } else {
      navigate('Login');
    }
  });
  return (
    <Container>
      <Header>
        <Body>
          <Title>Account Settings</Title>
        </Body>
      </Header>
      <Content>
        <Text>{employee.name}</Text>
      </Content>
      <Footer active="account" {...props} />
    </Container>
  );
};

const Account = props => {
  let [component, setComponent] = useState(<EngineerAccount {...props} />);
  useEffect(() => {
    getDataStorage('role', role => {
      if (role === 'engineer') {
        setComponent(<EngineerAccount {...props} />);
      } else {
        setComponent(<EmployeeAccount {...props} />);
      }
    });
  }, [props]);
  return component;
};

Account.navigationOptions = {
  header: null,
};

export default Account;
