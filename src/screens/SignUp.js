import React, {useState} from 'react';
import axios from 'axios';
import {View, TextInput} from 'react-native';
import {Container, H1, Text, Button, Picker, Icon} from 'native-base';
import s from '../style';

import {API_ENGINEER_ENDPOINT} from 'react-native-dotenv';

const SignUp = props => {
  const {navigation} = props;
  let [role, setRole] = useState('engineers');
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios
      .post(`${API_ENGINEER_ENDPOINT}/signup`, {
        name,
        username,
        email,
        password,
      })
      .then(() => {
        this.setState({alert: 'block', notDisabled: true});
      })
      .catch(() => {
        this.setState({
          displayError: 'block',
          errorMessage: 'Username or email already registered',
          notDisabled: true,
        });
      });
  };
  return (
    <Container style={s.center}>
      <View style={s.container}>
        <H1 style={[s.textCenter, s.header]}>Hiring Channel</H1>
        <View style={s.section}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your role"
            // eslint-disable-next-line react-native/no-inline-styles
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            style={{width: undefined}}
            selectedValue={role}
            onValueChange={value => setRole(value)}>
            <Picker.Item label="Engineer" value="engineers" />
            <Picker.Item label="Employee" value="companies" />
          </Picker>
        </View>
        <View style={s.section}>
          <TextInput
            style={s.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={s.section}>
          <TextInput
            placeholder="Username"
            style={s.input}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={s.section}>
          <TextInput
            style={s.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={s.section}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={s.input}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={s.section}>
          <Button
            bordered
            style={s.center}
            onPress={() => alert('Eits, idak bisa')}>
            <Text>Sign Up</Text>
          </Button>
        </View>
        <View style={[s.section, s.register]}>
          <Text>Already have an account?</Text>
          <Button info transparent onPress={() => navigation.goBack()}>
            <Text> Login</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

SignUp.navigationOptions = {
  header: null,
};

export default SignUp;
