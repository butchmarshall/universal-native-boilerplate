import React from 'react';
import PropTypes from 'prop-types';
import {
  StackRouter,
} from 'react-navigation';

import AppFrame from './AppFrame';

export default (tabRoutes, options) => {
	const Router = StackRouter(tabRoutes, options);

	const AppNavigator = ({ navigation }) => {
		return (
			<AppFrame
				router={Router}
				navigation={navigation}
				tabBarOptions={options.tabBarOptions}
			/>
		);
	};
	AppNavigator.router = Router;

	AppNavigator.propTypes = {
		navigation: PropTypes.object,
	};

	return AppNavigator;
};
