import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileForm, SignIn, SignUp } from '../screen';
import { ROUTE_NAME } from '../helper';
import MainTabNavigator from './TabNavigator';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/_reducers/auth';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const auth = useSelector(getAuth);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={auth.token ? ROUTE_NAME.DASHBOARD : ROUTE_NAME.SIGNIN}>

        <Stack.Screen name={ROUTE_NAME.SIGNIN} component={SignIn} />
        <Stack.Screen name={ROUTE_NAME.SIGNUP} component={SignUp} />
     
        <Stack.Screen name={ROUTE_NAME.DASHBOARD} component={MainTabNavigator} />
        <Stack.Screen name={ROUTE_NAME.PROFILE_FORM} component={ProfileForm}  />
        
    </Stack.Navigator>
  );
};

export default MainNavigator;
