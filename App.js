import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import Welcome from './src/navigation/Welcome';

export default function App() {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
}