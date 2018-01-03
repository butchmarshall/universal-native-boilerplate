import React from 'react';
import PropTypes from 'prop-types';

import {
	View, Text, TouchableHighlight,
} from 'react-native';

import { Toolbar } from 'react-native-material-ui';

import MediaQuery from "react-native-web-responsive";

class SignIn extends React.Component {
	render() {
		const {navigation} = this.props;

		return (
			<View>
				<MediaQuery maxWidth={639}>
					<Toolbar
					   centerElement="Sign In"
						 />
				</MediaQuery>
				<View>
					<TouchableHighlight onPress={() => {
						navigation.navigate("SignUp");
					}}><Text>Go To Sign Up</Text></TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight onPress={() => {
						navigation.navigate("SignedIn");
					}}><Text>Login</Text></TouchableHighlight>
				</View>
			</View>
		);
	}
}

export default SignIn;