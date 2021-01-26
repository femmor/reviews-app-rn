import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import {useFonts} from "expo-font"
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';

export default props => {
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={tailwind('h-full bg-gray-100')}>
        <Home />
      </SafeAreaView>
    );
  }
};

