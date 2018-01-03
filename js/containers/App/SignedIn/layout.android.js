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

import {responsive,MediaQuery,ResponsiveComponent,ResponsiveStyleSheet} from "react-native-responsive-ui";

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
	},
	tab: {
		padding: 10,
	}
});

@responsive
class Layout extends React.Component {
	handlePressTab = (route) => () => {
		this.props.navigation.navigate(route.routeName);
	}

	render() {
		const {width, height} = this.props.window;

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
					<Component
						navigation={addNavigationHelpers({
						  ...navigation,
						  state: state.routes[state.index],
						})}
					/>
				</MediaQuery>
			</View>
		);
	}
};

export default Layout;