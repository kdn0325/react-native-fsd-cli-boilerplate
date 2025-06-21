import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export const Button = ({ title, onPress, disabled }: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, disabled && styles.disabled]}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#b0bec5',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
