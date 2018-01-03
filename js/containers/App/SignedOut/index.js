import { StackNavigator } from "react-navigation";

import SignUp from './SignUp';
import SignIn from './SignIn';

const SignedOut = StackNavigator({
	SignUp: {
		screen: SignUp,
		path: 'sign_up',
		navigationOptions: {
		  title: 'Sign Up',
		  tabBarLabel: 'Sign Up',
		},
	},
	SignIn: {
		screen: SignIn,
		path: 'sign_in',
		navigationOptions: {
		  title: 'Sign In',
		  tabBarLabel: 'Sign In',
		},
	}
}, {
	initialRouteName: 'SignUp',
	headerMode: 'none',
	tabBarOptions: {
	},
});

export default SignedOut;