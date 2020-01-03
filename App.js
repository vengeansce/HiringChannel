import React from 'react';
import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fadeIn as transition} from 'react-navigation-transitions';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Engineers from './src/screens/Engineers';
import Engineer from './src/screens/Engineer';
import Companies from './src/screens/Companies';
import Chat from './src/screens/Chat';
import Account from './src/screens/Account';

import {Provider} from './src/context';

const mainNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Engineers: {screen: Engineers},
    Engineer: {screen: Engineer},
    Companies: {screen: Companies},
    Chat: {screen: Chat},
    Account: {screen: Account},
  },
  {
    initialRouteName: 'Login',
    transitionConfig: () => transition(0),
  },
);

const AppContainer = createAppContainer(mainNavigator);

const App = () => (
  <Provider>
    <Root>
      <AppContainer />
    </Root>
  </Provider>
);

export default App;
// Bottom tab gak usah ikut kegeser(transition)
