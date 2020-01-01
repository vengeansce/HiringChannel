import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fadeIn as transition} from 'react-navigation-transitions';

import Engineers from './src/screens/Engineers';
import Engineer from './src/screens/Engineer';
import Employees from './src/screens/Employees';
import Chat from './src/screens/Chat';
import Account from './src/screens/Account';

import {Provider} from './src/context';

const mainNavigator = createStackNavigator(
  {
    Engineers: {screen: Engineers},
    Engineer: {screen: Engineer},
    Employees: {screen: Employees},
    Chat: {screen: Chat},
    Account: {screen: Account},
  },
  {
    initialRouteName: 'Engineers',
    transitionConfig: () => transition(0),
  },
);

const AppContainer = createAppContainer(mainNavigator);

const App = () => (
  <Provider>
    <AppContainer />
  </Provider>
);

export default App;
// Bottom tab gak usah ikut kegeser(transition)
