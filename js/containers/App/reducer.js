import {REHYDRATE} from 'redux-persist';
import App from './record';

import Navigator from './Navigator';
let initialState = new App({
	navigator: undefined,
	nav: undefined,
	params: undefined
});

const reducer = (state = initialState, action) => {

	// Setup our navigator if it doesnt exist yet
	if (!state.navigator) {
		state = state.set("navigator", new Navigator(false));
	}

	switch (action.type) {
		case REHYDRATE:
			if (action.payload && action.payload.app) {
				//state = new App(action.payload.app);
			}
			break;
		default:
			state = state.set("nav", (state.navigator.router.getStateForAction(action, state.nav) || state.nav));
			break;
	}

	return state;
}

export default reducer;