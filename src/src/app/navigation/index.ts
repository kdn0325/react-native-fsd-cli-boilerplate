import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

const Stack = createNativeStackNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};
