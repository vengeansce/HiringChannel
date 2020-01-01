import React from 'react';
import {View, TextInput} from 'react-native';
import {Container, H1, Text, Button} from 'native-base';
import s from '../style';

const Login = props => {
  const {navigation} = props;
  return (
    <Container style={s.center}>
      <View style={s.container}>
        <H1 style={[s.textCenter, s.header]}>Hiring Channel</H1>
        <View style={s.section}>
          <Text>Username or email</Text>
          <TextInput style={s.input} placeholder="william" value="" />
        </View>
        <View style={s.section}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="***"
            style={s.input}
            value=""
          />
        </View>
        <View style={s.section}>
          <Button bordered style={s.center}>
            <Text>Login</Text>
          </Button>
        </View>
        <View style={[s.section, s.register]}>
          <Text>Don't have an account?</Text>
          <Button
            info
            transparent
            onPress={() => navigation.navigate('SignUp')}>
            <Text> Sign Up</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
