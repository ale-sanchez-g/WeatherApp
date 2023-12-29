// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SimpleButton from './buttons/SimpleButton';
import CloudImage from './img/CloudImg';

const App = () => {
  const [buttonPosition, setButtonPosition] = useState({ left: 100, top: 300 });

  const handleButtonPress = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    // Generate random positions within the screen dimensions
    const newLeft = Math.floor(Math.random() * (screenWidth - 100));
    const newTop = Math.floor(Math.random() * (screenHeight - 100));

    setButtonPosition({ left: newLeft, top: newTop });
  };

  return (
    <View style={styles.container}>
      <Text>Wheather Application</Text>
      <SimpleButton
        onPress={handleButtonPress}
        title="Check how it changes"
        position={{ left: buttonPosition.left, top: buttonPosition.top }}
      />
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
