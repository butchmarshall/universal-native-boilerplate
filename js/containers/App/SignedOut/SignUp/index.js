import React from 'react';
import PropTypes from 'prop-types';

import {
	View, Text, TouchableHighlight,
} from 'react-native';

class SignUp extends React.Component {
	render() {
		const {navigation} = this.props;

		return (
			<View>
				<Text>Sign Up</Text>
				<TouchableHighlight onPress={() => {
					navigation.navigate("SignIn");
				}}><Text>Go To Sign In</Text></TouchableHighlight>
			</View>
		);
	}
}

export default SignUp;