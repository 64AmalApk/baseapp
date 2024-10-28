import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../resources';
import { moderateScale, textScale, moderateScaleVertical } from '../../../helper';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subText}>
          This is your home screen. Start building your app here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    padding: moderateScale(20),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: textScale(24),
    fontWeight: 'bold',
    color: Colors.text,
  },
  content: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: textScale(28),
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: moderateScaleVertical(10),
  },
  subText: {
    fontSize: textScale(16),
    color: Colors.textGray,
    textAlign: 'center',
  },
});

export default HomeScreen;
