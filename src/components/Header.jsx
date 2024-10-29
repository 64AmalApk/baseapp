import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../helper';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Let Start</Text>
        <Text style={styles.title}>The Work</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(120),
    backgroundColor: Colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomEndRadius: moderateScale(25),
    borderBottomStartRadius: moderateScale(25),
    marginBottom: moderateScaleVertical(10)
  },
  textContainer: {
    // marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  title: {
    fontSize: textScale(32),
    color: Colors.white,
    fontWeight: '600',
  },
});

export default Header;
