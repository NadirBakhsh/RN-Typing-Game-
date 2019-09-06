import React from 'react';
import { StyleSheet , View, KeyboardAvoidingView } from 'react-native';
import MainNavigator from './config/navigation'
import { Provider } from 'react-redux'
import store from './store'



export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <MainNavigator />
    </KeyboardAvoidingView>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      fontSize: 30,
  },
});
