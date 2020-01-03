import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FormData from 'form-data';
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
  getMultipleDataStorage,
  clearSession,
} from '../../helpers/script';
import {API_BASE_URL, API_ENDPOINT} from 'react-native-dotenv';
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
    id: '',
    token: '',
  });
  const setProfile = () => {
    getMultipleDataStorage(['id', 'token'], values => {
      const id = values[0][1];
      const token = values[1][1];
      if (id !== null) {
        fetchEngineer(id, data => {
          if (data) {
            setEngineer({...data, id, token});
          } else {
            navigate('Login');
          }
        });
      } else {
        navigate('Login');
      }
    });
  };
  const updateProfile = () => {
    const form = new FormData();
    form.append('name', engineer.name);
    form.append('description', engineer.description);
    form.append('location', engineer.address);
    form.append('skills', engineer.skills);
    form.append('birthdate', engineer.birthdate);
    form.append('img', engineer.img);
    form.append('salary', engineer.salary);
    form.append('id', engineer.id);

    axios
      .put(`${API_ENDPOINT}?token=${engineer.token}`, form, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
        },
      })
      .then(() => {
        setProfile();
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('File too big. Max: 1mb');
      });
  };
  useEffect(() => {
    setProfile();
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
              placeholder="Make it as long and as crazy as you'd like"
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
              placeholder="e.g., Java, C++, Tailwind CSS"
              value={engineer.skills}
              onChangeText={text => setEngineer({...engineer, skills: text})}
            />
            <Text style={s.pr}>Skills</Text>
          </Item>
          <Item>
            <Input
              placeholder="2020-01-03"
              value={engineer.birthdate.split('T')[0]}
              onChangeText={text => setEngineer({...engineer, birthdate: text})}
            />
            <Text style={s.pr}>Birthdate</Text>
          </Item>
          <Item>
            <Input
              placeholder="Expected salaries"
              keyboardType="numeric"
              value={engineer.salary.toString()}
              onChangeText={text => setEngineer({...engineer, salary: text})}
            />
            <Text style={s.pr}>($)</Text>
          </Item>
          <Item>
            <Input
              placeholder="e.g., Babelan"
              value={engineer.location}
              onChangeText={text => setEngineer({...engineer, location: text})}
            />
            <Text style={s.pr}>Address</Text>
          </Item>
        </View>
        <View style={s.px2}>
          <Button success block style={s.my} onPress={updateProfile}>
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
