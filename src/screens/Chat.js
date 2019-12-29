import React from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';
import Footer from '../components/Footer';

function Chat(props) {
  return (
    <Container>
      <Content>
        <Text>Chat</Text>
      </Content>
      <Footer active="chat" {...props} />
    </Container>
  );
}

Chat.navigationOptions = {
  header: null,
};

export default Chat;
