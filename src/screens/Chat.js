import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Content} from 'native-base';
import Footer from '../components/Footer';

function Chat(props) {
  return (
    <Container>
      <Content contentContainerStyle={s.content}>
        <Image source={require('../img/images.png')} />
      </Content>
      <Footer active="chat" {...props} />
    </Container>
  );
}

const s = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Chat.navigationOptions = {
  header: null,
};

export default Chat;
