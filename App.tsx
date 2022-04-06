/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import './src/config/reactotron';

import React from 'react';
import { Home } from './src/screens/Home';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
