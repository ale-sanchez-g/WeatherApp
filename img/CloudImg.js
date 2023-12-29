// CloudButton.js
import React from 'react';
import { Image } from 'react-native';

const CloudImage = () => {
  return (
    <Image
      source={require('../assets/cloudy.png')}
      style={{width: 80, height: 80}}
    /> 
  );
};

export default CloudImage;
