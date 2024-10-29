import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../resources';
import { Button, Spacer } from '../../../components';
import { moderateScale, textScale } from '../../../helper';

const VerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VerificationScreen Screen</Text>
      <Spacer height={20} />
      <Text style={styles.description}>
        This is a demo pending screen. You can customize it according to your needs.
      </Text>
      <Spacer height={40} />
      <Button 
        title="Demo Button"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: textScale(24),
    color: Colors.black,
    textAlign: 'center'
  },
  description: {
    fontSize: textScale(16),
    color: Colors.grey,
    textAlign: 'center'
  }
});

export default VerificationScreen;
