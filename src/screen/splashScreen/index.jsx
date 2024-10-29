import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Images } from '../../resources';
import { moderateScale } from '../../helper';

const SplashScreen = () => {
  const bounceAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      // First zoom in quickly
      Animated.spring(bounceAnim, {
        toValue: 1.2,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      // Then bounce back to normal size
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 4,
        tension: 20,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{
        transform: [{
          scale: bounceAnim.interpolate({
            inputRange: [0, 1, 1.2],
            outputRange: [0.3, 1, 1.2]
          })
        }]
      }}>
        <FastImage
          style={styles.image}
          source={Images.splash}
          // resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: Dimensions.get('window').width * 0.25, // Set borderRadius to half of the width to make it a circle
    overflow: 'hidden', // Ensure the image is clipped to the container's border radius
  },
  image: {
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: moderateScale(100)
  },
});
