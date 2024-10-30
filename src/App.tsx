// In App.js in a new project

import * as React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation';
import { Colors } from './resources';
import { PaperProvider } from 'react-native-paper';
import { persistor, store } from './store';
import { AppProvider } from './_customContext/AppProvider';
import { TaskProvider } from './_customContext/TaskContext';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <AppProvider>
                    <TaskProvider>
                      <AppNavigator />
                    </TaskProvider>
                  </AppProvider>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </SafeAreaView>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;