import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Image, StatusBar, Button, Alert, Platform } from 'react-native';

import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import ProfileScreen from './App/Screens/ProfileScreen';


const Stack = createStackNavigator();


export default function App() 
{

  const {landscape} = useDeviceOrientation()

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome"component={WelcomeScreen} options={{ headerShown: false  }}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Welcome', headerMode: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const containerStyle = {backgroundColor: "#a3d0ff"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
