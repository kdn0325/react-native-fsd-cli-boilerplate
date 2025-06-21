import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
