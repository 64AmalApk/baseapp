import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ROUTE_NAME } from '../helper';
import MainTabNavigator from './TabNavigator';


const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE_NAME.DASHBOARD} component={MainTabNavigator} />
      {/* <Stack.Screen name={RouteName.COUPONCODE} component={couponCode} /> */}
   
    </Stack.Navigator>
  );
};

export default DashboardNavigator;

const styles = StyleSheet.create({});
