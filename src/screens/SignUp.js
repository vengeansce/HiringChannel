import React, {useState} from 'react';
import axios from 'axios';
import {View, TextInput, ActivityIndicator} from 'react-native';
import {Container, H1, Text, Button, Picker, Icon} from 'native-base';
import s from '../style';

import {toastr} from '../helpers/script';
import {API_ENDPOINT} from 'react-native-dotenv';

const SignUp = props => {
  const {
    navigation: {goBack},
  } = props;
  let [role, setRole] = useState('engineers');
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });

  const handleSubmit = () => {
    if (!name || !username || !email || !password) {
      toastr('Please fill out all of this field.');
      return;
    }
    setConfig({loading: true, error: false});
    axios
      .post(`${API_ENDPOINT + role}/signup`, {
        name,
        username,
        email,
        password,
      })
      .then(() => {
        setConfig({loading: false, error: false});
        toastr(
          'Your account successfully registered. You can login now!',
          'success',
        );
        goBack();
      })
      .catch(err => {
        console.log(err);
        setConfig({loading: false, error: true});
        toastr('Username or email already registered');
      });
  };
  return (
    <Container style={s.center}>
      <View style={s.container}>
        <H1 style={[s.textCenter, s.header]}>Hiring Channel</H1>
        <View style={[s.section, s.center]}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your role"
            // eslint-disable-next-line react-native/no-inline-styles
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            style={s.picker}
            selectedValue={role}
            onValueChange={value => setRole(value)}>
            <Picker.Item label="Engineer" value="engineers" />
            <Picker.Item label="Company" value="companies" />
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
            disabled={config.loading}
            bordered
            style={s.center}
            onPress={handleSubmit}>
            {config.loading ? (
              <ActivityIndicator size="small" color="#3f51b5" />
            ) : (
              <Text>Sign Up</Text>
            )}
          </Button>
        </View>
        <View style={[s.section, s.register]}>
          <Text>Already have an account?</Text>
          <Button info transparent onPress={() => goBack()}>
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
