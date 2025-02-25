/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { FormControl, FormControlError, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// mixin to enable storage on web
class SupabaseStorage {
  getItem (key: string) {
    if (Platform.OS === 'web') {
      if (typeof localStorage === 'undefined') {
        return null;
      }

      return localStorage.getItem(key);
    }

    return AsyncStorage.getItem(key);
  }

  removeItem (key: string) {
    if (Platform.OS === 'web') {
      return localStorage.removeItem(key);
    }

    return AsyncStorage.removeItem(key);
  }

  setItem (key: string, value: string) {
    if (Platform.OS === 'web') {
      return localStorage.setItem(key, value);
    }

    return AsyncStorage.setItem(key, value);
  }
}

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const storage = new SupabaseStorage();

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or anon key is not set');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    autoRefreshToken  : true,
    persistSession    : true,
    detectSessionInUrl: false
  }

});

export default function LoginScreen () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email   : '',
    password: ''
  });

  const handleLogin = async () => {
    console.log('handle login');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      console.log('handle login', data);

      if (error) {
        throw error;
      }
      Alert.alert('Login successful!');
    } catch (error: unknown) {
      Alert.alert(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  const handleRegister = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      console.log('handle register', data);

      if (error) {
        throw error;
      }
      Alert.alert('Registration successful!');
    } catch (error: unknown) {
      Alert.alert(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  const handleForgotPassword = async () => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);

      console.log('handle forgot password', data);

      if (error) {
        throw error;
      }
      Alert.alert('Password reset email sent!');
    } catch (error: unknown) {
      Alert.alert(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    const hasErrors = Object.keys(newErrors).length > 0;

    if (hasErrors) {
      setErrors(prevErrors => ({
        ...prevErrors,
        ...newErrors
      }));
    }

    return !hasErrors;
  };

  const handleSubmit = () => {
    console.log('handle submit');

    console.log(validateForm());

    if (validateForm()) {
      handleLogin();
    }
  };

  return (
    <Box className="flex-1 items-center justify-center p-4">
      <VStack space="md">
        <Text className="text-2xl font-bold mb-4">Login</Text>
        <FormControl isInvalid={!!errors.email}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </Input>
          <FormControlError>{errors.email}</FormControlError>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              type={showPassword ? 'text' : 'password'}
            />
            <InputSlot className="pr-3" onPress={() => setShowPassword(!showPassword)}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
          <FormControlError>{errors.password}</FormControlError>
        </FormControl>
        <Button onPress={handleSubmit}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button onPress={handleRegister} variant="outline">
          <ButtonText>Register</ButtonText>
        </Button>
        <Button onPress={handleForgotPassword} variant="link">
          <ButtonText>Forgot Password?</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
