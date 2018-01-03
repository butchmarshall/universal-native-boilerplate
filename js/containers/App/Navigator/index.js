import {StackNavigator} from 'react-navigation';
//import StackNavigator from '../../../components/StackNavigator';
import Routes from './routes';
import commonTabBarOptions from './common_tab_bar_options';

const Navigator = StackNavigator(Routes, {
	initialRouteName: 'SignedOut',
	headerMode: 'none',
	navigationOptions: {
		gesturesEnabled: false,
	},
	tabBarOptions: commonTabBarOptions,
});

export default Navigator;
