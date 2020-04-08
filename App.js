import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from './TrainComponents/Home';
import LoginScreen from './TrainComponents/LoginScreen';
import RegisterScreen from './TrainComponents/RegisterScreen';
import HophoetScreen from './TrainComponents/HophoetScreen';
import {createStackNavigator} from 'react-navigation-stack'
import Nav from './TrainComponents/Nav'
import Navigator from './todoNavigations/Navigator'
import Logo from './TrainComponents/Logo'
import LoadingScreen from './TrainComponents/LoadingScreen'
import AppNavigator from './navigation/AppNavigator';
import Screen1 from './designRadio/Screen1';
import Scroll from './TrainComponents/Scroll';
export default function App(props) {

    return (
      <Navigator
      />
    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
