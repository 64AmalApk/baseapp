import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../resources';
import { moderateScale, textScale, moderateScaleVertical, ROUTE_NAME } from '../../../helper';
import { navigationService } from '../../../services';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>Please sign in to continue</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={navigationService.navigate(ROUTE_NAME.SIGNUP)}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: moderateScaleVertical(30),
  },
  inputContainer: {
    marginBottom: moderateScaleVertical(20),
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: moderateScale(8),
    padding: moderateScale(15),
    marginBottom: moderateScaleVertical(15),
    fontSize: textScale(16),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: moderateScaleVertical(20),
  },
  forgotPasswordText: {
    color: Colors.secondary,
    fontSize: textScale(14),
  },
  signInButton: {
    backgroundColor: Colors.primary,
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginBottom: moderateScaleVertical(20),
  },
  signInButtonText: {
    color: Colors.white,
    fontSize: textScale(16),
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: textScale(14),
    color: Colors.textGray,
  },
  signUpText: {
    fontSize: textScale(14),
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
