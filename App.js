// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import RegistrationForm from './components/RegistrationForm';
import CloudImage from './img/CloudImg';

const Stack = createStackNavigator();

const RegisterScreen = () => (
  <View style={{ 
      flex: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <CloudImage />
    <RegistrationForm />
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
