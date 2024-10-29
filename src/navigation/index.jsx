import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MainNavigator from './MainNavigator';

import {SplashScreen} from '../screen';
const RootNavigator = () => {
  const [isSplash, setIsSplash] = useState(true);
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated);


  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isSplash ? <SplashScreen /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
