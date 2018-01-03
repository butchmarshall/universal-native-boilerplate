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
	TabRouter,
	addNavigationHelpers,
	createNavigator,
} from 'react-navigation';

import MediaQuery from "react-native-web-responsive";
const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
	},
	tab: {
		padding: 10,
	}
});

class Layout extends React.Component {
	handleLogout = () => {
		this.props.navigation.navigate("SignedOut");
	}
	handlePressTab = (route) => () => {
		this.props.navigation.navigate(route.routeName);
	}

	render() {
		const {
			navigation,
			router
		} = this.props;

		const { state } = navigation;
		const Component = router.getComponentForState(state);

		return (
			<View>
				<MediaQuery minWidth={640}>
					<View>
					<TouchableHighlight onPress={this.handleLogout} style={styles.tab}><Text>Logout</Text></TouchableHighlight>
					<View>
						<View style={styles.tabs}>
						{(() => {
							return state.routes.map((route) => {
								return (
									<View key={route.key}>
										<TouchableHighlight onPress={this.handlePressTab(route)} style={styles.tab}><Text>{route.routeName}</Text></TouchableHighlight>
									</View>
								)
							});
						})()}
						</View>
					</View>
					<Component
						navigation={addNavigationHelpers({
						  ...navigation,
						  state: state.routes[state.index],
						})}
					/>
					</View>
				</MediaQuery>
				<MediaQuery maxWidth={639}>
					<View><Text>This is a smallll screeen!</Text></View>
				</MediaQuery>
			</View>
		);
	}
};

export default Layout;