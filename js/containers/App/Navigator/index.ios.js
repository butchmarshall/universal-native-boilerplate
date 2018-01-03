import {
  TabNavigator,
} from 'react-navigation';

import TabRoutes from './TabRoutes';
import commonTabBarOptions from './common_tab_bar_options';

const AppNavigator = TabNavigator(TabRoutes, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarOptions: commonTabBarOptions,
});

export default AppNavigator;
