import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Images } from '../../resources';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={Images.splash}
        // resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
