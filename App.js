import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions';

import Engineers from './src/screens/Engineers';
import Employees from './src/screens/Employees';
import Chat from './src/screens/Chat';
import Account from './src/screens/Account';

const mainNavigator = createStackNavigator(
  {
    Engineers: {screen: Engineers},
    Employees: {screen: Employees},
    Chat: {screen: Chat},
    Account: {screen: Account},
  },
  {
    initialRouteName: 'Engineers',
    transitionConfig: () => fromLeft(),
  },
);

const App = createAppContainer(mainNavigator);

export default App;
// Bottom tab gak usah ikut kegeser(transition)
