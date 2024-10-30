/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../../helper';

const RadioButton = ({ label, checked, onPress, labelStyle, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Icon
        name={checked ? 'radio-button-checked' : 'radio-button-unchecked'} 
        size={textScale(20)}
        color={Colors.secondary}
      />
      <Text style={[styles.label, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(5),
  },
  label: {
    marginLeft: moderateScale(8),
    fontSize: textScale(14),
    color: Colors.text,
  },
});

export default RadioButton;