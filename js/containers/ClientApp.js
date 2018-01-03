import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  getStore,
} from '../redux/store';
import App from './App';

import { COLOR, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const ClientApp = () => {
  return (
    <Provider store={getStore()}>
		<ThemeProvider uiTheme={uiTheme}>
			<App />
		</ThemeProvider>
    </Provider>
  );
};

export default ClientApp;
