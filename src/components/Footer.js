import React from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';

export default function Footers() {
  return (
    <Footer>
      <FooterTab>
        <Button vertical active>
          <Icon active name="bug" />
          <Text>Engineer</Text>
        </Button>
        <Button vertical>
          <Icon name="aperture" />
          <Text>Employee</Text>
        </Button>
        <Button vertical>
          <Icon name="text" />
          <Text>Chat</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
