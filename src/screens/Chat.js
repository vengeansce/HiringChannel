import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Content, H1} from 'native-base';
import Footer from '../components/Footer';

function Chat(props) {
  return (
    <Container>
      <Content contentContainerStyle={s.content}>
        <Image source={require('../img/maintenance.png')} style={s.img} />
        <H1>Chat on maintenance</H1>
      </Content>
      <Footer active="chat" {...props} />
    </Container>
  );
}

const s = StyleSheet.create({
  img: {width: 250, height: 250},
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
