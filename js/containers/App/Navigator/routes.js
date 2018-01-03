import React from 'react';
import PropTypes from 'prop-types';


import NotFound from '../../../views/NotFound';

export const notFoundKey = 'NotFound';

import Splash from '../Splash';
import SignedOut from '../SignedOut';
import SignedIn from '../SignedIn';

/**
 * The routes for the App
 */
export const Routes = {
	Splash: {
		screen: Splash,
		path: 'wait',
	},
	SignedOut: {
		screen: SignedOut,
		path: 'signed_out',
	},
	SignedIn: {
		screen: SignedIn,
		path: 'signed_in',
	},
	NotFound: {
		screen: NotFound,
		path: '404',
	},
};

export default Routes;