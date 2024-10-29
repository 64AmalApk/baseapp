import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Colors, Images } from '../../../resources';
import { moderateScale, textScale, moderateScaleVertical, ROUTE_NAME } from '../../../helper';
import { Button, Input, Spacer } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-paper';
import { useAppContext } from '../../../_customContext/AppProvider';
import { authService } from '../../../services';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/_reducers/auth';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
});

const SignInScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast, showLoader, hideLoader } = useAppContext()
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'satyam123@gmail.com',
      password: 'Satyam@2207'
    }
  });

  const handleSignIn = async (data) => {
    try {
      setIsLoading(true);
      // showLoader();
      const response = await authService.signIn(data)
      showToast('Successfully logged in');
      dispatch(login(response.data))
      navigation.replace(ROUTE_NAME.DASHBOARD)
    } catch (error) {
      showToast(error.message || 'Sign in failed', 'error');
    } finally {
      hideLoader();
      showToast('logged in feaild ', 'error');
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        extraHeight={130} extraScrollHeight={130}
      >
        <View style={styles.imageContainer}>
          <FastImage
            source={Images.login}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View>
          <Text style={[styles.welcomeText, { fontSize: textScale(38) }]}> URMS</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>

          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  onChangeText={onChange}
                  value={value}
                  error={errors.email?.message}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                  mode="outlined"
                  outlineStyle={styles.inputOutline}
                  outlineColor={Colors.primary}
                  activeOutlineColor={Colors.primary}
                  left={<TextInput.Icon icon="email" color={Colors.primary} />}
                />
              )}
            />
          </View>

          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Password"
                  placeholder="Enter your password"
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                  secureTextEntry={!showPassword}
                  style={styles.input}
                  mode="outlined"
                  outlineStyle={styles.inputOutline}
                  outlineColor={Colors.primary}
                  activeOutlineColor={Colors.primary}
                  left={<TextInput.Icon icon="lock" color={Colors.primary} />}
                  right={
                    <TextInput.Icon
                      icon={showPassword ? "eye-off" : "eye"}
                      color={Colors.primary}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />
              )}
            />
          </View>

          <Button
            title="Sign In"
            style={[styles.signInButton]}
            textStyle={styles.signInButtonText}
            onPress={handleSubmit(handleSignIn)}
            isDisabled={isLoading}
            showLoader={isLoading}
          />
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity disabled={isLoading}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

        </View>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  imageContainer: {
    height: moderateScale(350),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    padding: moderateScale(20),
    paddingTop: moderateScale(25),
  },
  welcomeText: {
    fontSize: textScale(28),
    fontWeight: 'bold',
    color: Colors.warning,
    marginBottom: moderateScaleVertical(30),
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: moderateScaleVertical(20),
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(50),
  },
  inputOutline: {
    borderRadius: moderateScale(50),
  },
  signInButton: {
    backgroundColor: Colors.primary,
    padding: moderateScale(15),
    borderRadius: moderateScale(50),
    alignItems: 'center',
    marginBottom: moderateScaleVertical(20),
    elevation: 3,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  signInButtonText: {
    color: Colors.white,
    fontSize: textScale(16),
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontSize: textScale(15),
    fontWeight: '600',
  }
});

export default SignInScreen;
