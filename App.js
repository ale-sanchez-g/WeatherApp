// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import RegistrationForm from './components/RegistrationForm';
import CloudImage from './img/CloudImg';

const App = () => {

  return (
    <View style={styles.container}>
      <RegistrationForm />
      <Text>
        Wheather Application
      </Text>
      <CloudImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50', // Dark grey background color
  },
});

export default App;
