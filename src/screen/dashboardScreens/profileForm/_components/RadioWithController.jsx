import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { RadioButton } from '../../../../components';
import { moderateScale, textScale } from '../../../../helper';
import { Colors } from '../../../../resources';

const RadioWithController = ({ name, control, options, label }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            {options.map((option) => (
              <RadioButton
                key={option.value}
                label={option.label}
                checked={value === option.value}
                onPress={() => onChange(option.value)}
              />
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    section: {
        marginVertical: moderateScale(16)
      },
      sectionTitle: {
        fontSize: textScale(16),
        fontWeight: '600',
        marginBottom: moderateScale(12),
        color: Colors.black
      },
      input: {
        backgroundColor: Colors.white
      },
});

export default RadioWithController;
