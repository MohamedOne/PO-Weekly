import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterDetail from './screens/MasterDetail';
import { Provider} from 'react-redux';
import { createStore, Store } from 'redux';
import { reducers } from './redux/reducers';

export default function App() {

  const store = createStore(reducers);
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <MasterDetail />
      <StatusBar style="auto" />
    </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
