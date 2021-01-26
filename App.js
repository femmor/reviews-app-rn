import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaView style={tailwind('h-full bg-gray-100')}>
      <Home />
    </SafeAreaView>
  );
}

