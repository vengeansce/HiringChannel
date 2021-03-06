import React from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';

export default function Footers(props) {
  const {
    active,
    navigation: {navigate},
  } = props;

  const activeTab = tab => (active === tab ? true : false);
  const tab = {
    engineers: activeTab('engineers'),
    companys: activeTab('companys'),
    chat: activeTab('chat'),
    account: activeTab('account'),
  };

  return (
    <Footer>
      <FooterTab>
        <Button
          active={tab.engineers}
          vertical
          onPress={() =>
            navigate({routeName: 'Engineers', transitionStyle: 'inverted'})
          }>
          <Icon active={tab.engineers} name="bug" />
          <Text>Engineer</Text>
        </Button>
        <Button
          active={tab.companys}
          vertical
          onPress={() => navigate('Companies')}>
          <Icon active={tab.companys} name="aperture" />
          <Text>Company</Text>
        </Button>
        <Button active={tab.chat} vertical onPress={() => navigate('Chat')}>
          <Icon active={tab.chat} name="text" />
          <Text>Chat</Text>
        </Button>
        <Button
          active={tab.account}
          vertical
          onPress={() => navigate('Account')}>
          <Icon active={tab.account} name="person" />
          <Text>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
