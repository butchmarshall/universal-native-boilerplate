import Immutable from 'immutable';

const App = Immutable.Record({
	signed_in: false,
	navigator: undefined,
	nav: undefined,
	params: undefined,
}, 'App');

export default App;