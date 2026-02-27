import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import "./global.css";

// Screens
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  return (
    <SplashScreen />
  );
}


