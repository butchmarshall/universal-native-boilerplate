import {
  combineReducers,
} from 'redux';

import AppNavigator from '../../containers/App/Navigator';
import transient from '../reducers/transient';

export default combineReducers({
	transient,
	nav: (state, action) => {
		return AppNavigator.router.getStateForAction(action, state) || state;
	},
});
