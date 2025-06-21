import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useLoginStore } from '../model/loginStore';

export const LoginForm = () => {
  const { loading, error, login } = useLoginStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    login(email, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button
        title={loading ? 'Loading...' : 'Login'}
        onPress={onSubmit}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    height: 40,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
