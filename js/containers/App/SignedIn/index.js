import {
	StackRouter, TabRouter,
	addNavigationHelpers,
	createNavigator,
} from 'react-navigation';

import Layout from './layout';

import Polls from './Polls';
import Recognition from './Recognition';
import Ideas from './Ideas';

import Icon from '../../../components/Icon';
import TabNavigator from '../../../components/TabNavigator';

const SignedIn = createNavigator(
	TabRouter({
		Polls: {
			screen: Polls,
			path: 'polls',
		},
		Recognition: {
			screen: Recognition,
			path: 'recognition',
		}
	})
)(Layout);

export default SignedIn;