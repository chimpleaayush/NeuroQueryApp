/* eslint-disable import/no-extraneous-dependencies */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import ErrorBoundary from './src/commonComponents/ErrorBoundary';
import {Route} from './src/navigation/appStack';
import {Color} from './src/asset';

// LogBox.ignoreAllLogs();

const AppHOC = () => {
  return <Route isLoggedIn={false} />;
};

const AppWrappedWithStore = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          animated
          backgroundColor={Color.black}
        />
        <AppHOC />
      </Provider>
    </ErrorBoundary>
  );
};

export default AppWrappedWithStore;
