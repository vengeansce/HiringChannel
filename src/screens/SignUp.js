import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Container, H1, Text, Button, Picker, Icon} from 'native-base';
import s from '../style';

const SignUp = props => {
  const {navigation} = props;
  let [role, setRole] = useState('engineers');
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
          <TextInput style={s.input} placeholder="Name" value="" />
        </View>
        <View style={s.section}>
          <TextInput placeholder="Username" style={s.input} value="" />
        </View>
        <View style={s.section}>
          <TextInput style={s.input} placeholder="Email" value="" />
        </View>
        <View style={s.section}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={s.input}
            value=""
          />
        </View>
        <View style={s.section}>
          <Button bordered style={s.center}>
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
