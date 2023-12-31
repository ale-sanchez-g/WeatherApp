// SimpleButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SimpleButton = ({ onPress, title, position }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, position]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50, // Increase the borderRadius to create a circular shape
    borderWidth: 6,
    borderColor: '#bdc3c7', // Border color for a more defined cloud shape
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#3498db', // Blue for the text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SimpleButton;
