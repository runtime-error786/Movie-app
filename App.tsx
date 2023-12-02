import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Tab } from './Tab';
import { Storee } from './Store';
import { Provider } from 'react-redux/es/exports';
import { LogBox } from 'react-native';

// logs (warnings, errors, etc.)
LogBox.ignoreAllLogs();

function App(): JSX.Element {

  return (
    <Provider store={Storee}>
    <Tab></Tab>
    </Provider>
  );
}


export default App;
