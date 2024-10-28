import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../resources';
import { moderateScale, textScale, moderateScaleVertical, ROUTE_NAME } from '../../../helper';
import { navigationService } from '../../../services';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic here
    navigationService.navigate(ROUTE_NAME.SIGNIN)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Create Account</Text>
        <Text style={styles.subText}>Please fill in the form to continue</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={navigation.navigate(ROUTE_NAME.SIGNIN)}>
            <Text style={styles.signInText}>Sign In</Text>
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
  },
  content: {
    flex: 1,
    padding: moderateScale(20),
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
  signUpButton: {
    backgroundColor: Colors.primary,
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginBottom: moderateScaleVertical(20),
  },
  signUpButtonText: {
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
  signInText: {
    fontSize: textScale(14),
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
