import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp } from '../screen';
import { ROUTE_NAME } from '../helper';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTE_NAME.SIGNUP}>
      <Stack.Screen name={ROUTE_NAME.SIGNIN} component={SignIn} />
      <Stack.Screen name={ROUTE_NAME.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
