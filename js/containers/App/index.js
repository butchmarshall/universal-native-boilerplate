import React from 'react';
import PropTypes from 'prop-types';

import {
  connect,
} from 'react-redux';

import '../../libs';

import Navigator from './Navigator';
import URIWrapper from '../../components/URIWrapper';

class App extends React.Component {
	constructor(props) {
		super(props);

		// TODO - allows URIWrapper to work with a "base" path
		this.state = {
			NavigationWrappedApp: URIWrapper(Navigator, 'MuhApp')
		}
	}
	componentDidMount() {
		this.props.checkSignedIn();
	}

	render() {
		const {NavigationWrappedApp} = this.state;

		const {
			appReady,
			dispatch,
			nav,
		} = this.props;

		return (
			<NavigationWrappedApp
				dispatch={dispatch}
				state={nav}
				appReady={appReady}
			/>
		);
	}
}

App.propTypes = {
	appReady: PropTypes.bool,
	nav: PropTypes.object,
	dispatch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
	return {
		checkSignedIn: () => {
			dispatch({
				type: "CHECK_SIGNED_IN",
			});
		},
		dispatch,
	}
};

const mapStateToProps = (state) => {
	return {
		appReady: state.transient.appReady,
		nav: state.nav,
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
