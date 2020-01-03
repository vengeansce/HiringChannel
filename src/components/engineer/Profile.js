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
  fetchEngineer,
  getDataStorage,
  clearSession,
} from '../../helpers/script';
import {API_BASE_URL} from 'react-native-dotenv';
import s from '../../style/Profile';

const Account = props => {
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
  useEffect(() => {
    getDataStorage('id', id => {
      if (id !== null) {
        fetchEngineer(id, data => {
          if (!data) {
            navigate('Login');
          }
          setEngineer(data);
        });
      } else {
        navigate('Login');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              onChangeText={text =>
                setEngineer({...engineer, description: text})
              }
            />
          </Form>
        </View>
        <View>
          <Item>
            <Input
              value={engineer.name}
              onChangeText={text => setEngineer({...engineer, name: text})}
            />
            <Text style={s.pr}>Name</Text>
          </Item>
          <Item>
            <Input
              value={engineer.skills}
              onChangeText={text => setEngineer({...engineer, skills: text})}
            />
            <Text style={s.pr}>Skills</Text>
          </Item>
          <Item>
            <Input
              value={engineer.birthdate.split('T')[0]}
              onChangeText={text => setEngineer({...engineer, birthdate: text})}
            />
            <Text style={s.pr}>Birthdate</Text>
          </Item>
          <Item>
            <Input
              value={engineer.salary}
              onChangeText={text => setEngineer({...engineer, salary: text})}
            />
            <Text style={s.pr}>Salary</Text>
          </Item>
          <Item>
            <Input
              value={engineer.location}
              onChangeText={text => setEngineer({...engineer, location: text})}
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
