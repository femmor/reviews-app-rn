import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useFonts} from "expo-font"
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

const Stack = createStackNavigator();

export default props => {
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Details" component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

