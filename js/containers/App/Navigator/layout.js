import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Dimensions,
} from 'react-native';

import {
	addNavigationHelpers,
} from 'react-navigation';

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
	},
	tab: {
		padding: 10,
	}
});

class Layout extends React.Component {
	render() {
		const {
			navigation,
			router
		} = this.props;

		const { state } = navigation;
		const Component = router.getComponentForState(state);

		return (
			<View>
				<Component
					navigation={addNavigationHelpers({
					  ...navigation,
					  state: state.routes[state.index],
					})}
				/>
			</View>
		);
	}
};

export default Layout;