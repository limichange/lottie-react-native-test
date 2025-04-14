import React from 'react';
import LottieView from 'lottie-react-native';

export function Animation() {
  return (
    <LottieView
      style={{width: 400, height: 400}}
      source={require('./data.json')}
      autoPlay
      loop
    />
  );
}
