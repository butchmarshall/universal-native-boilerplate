import {
  TabNavigator,
} from 'react-navigation';

import TabRoutes from './TabRoutes';
import sharedTabBarOptions from './sharedTabBarOptions';

const AppNavigator = TabNavigator(TabRoutes, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarOptions: sharedTabBarOptions,
}, {
  containerOptions: {
    URIPrefix: 'unb://',
  },
});

export default AppNavigator;
