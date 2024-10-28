import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {isMountedRef, navigationRef} from '../services/navigation.service';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import {SplashScreen} from '../screen';
const RootNavigator = () => {
  const [isSplash, setIsSplash] = useState(true);
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  }, []);
  const MainStack = () => {
    return <>{isAuthenticated ? <DashboardNavigator /> : <AuthNavigator />}</>;
  };
  return (
    <NavigationContainer
      ref={navigationRef}
      // linking={linking}
    >
      {isSplash ? <SplashScreen /> : <MainStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
