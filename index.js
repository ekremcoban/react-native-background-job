/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';
import {name as appName} from './app.json';

const store = configureStore();

const MyHeadlessTask = async () => {
    console.log('Receiving Sutcu!');
  };

const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerHeadlessTask('Sutcu', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);
