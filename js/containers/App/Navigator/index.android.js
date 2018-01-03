import {
  TabNavigator,
} from 'react-navigation';

import Routes from './routes';
import commonTabBarOptions from './common_tab_bar_options';

const AppNavigator = TabNavigator(Routes, {
  initialRouteName: 'SignedOut',
  tabBarPosition: 'top',
  tabBarOptions: commonTabBarOptions,
});

export default AppNavigator;
