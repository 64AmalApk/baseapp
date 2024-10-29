import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp } from '../screen';
import { ROUTE_NAME } from '../helper';
import MainTabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_NAME.SIGNIN}>
      <Stack.Screen name={ROUTE_NAME.SIGNIN} component={SignIn} />
      <Stack.Screen name={ROUTE_NAME.SIGNUP} component={SignUp} />
      <Stack.Screen name={ROUTE_NAME.DASHBOARD} component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
