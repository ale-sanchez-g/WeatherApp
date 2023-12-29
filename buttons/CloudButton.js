// CloudButton.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const CloudButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <SvgUri
        width="80"
        height="183"
    />
    </TouchableOpacity>
  );
};

export default CloudButton;
