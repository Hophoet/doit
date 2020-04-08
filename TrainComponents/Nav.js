import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen'
import LoadingScreen from './LoadingScreen'
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBRuSUDxkoll50qmwAPBcStsMu62C7GdXs",
  authDomain: "train-app-105b7.firebaseapp.com",
  databaseURL: "https://train-app-105b7.firebaseio.com",
  projectId: "train-app-105b7",
  storageBucket: "train-app-105b7.appspot.com",
  messagingSenderId: "733969777138",
  appId: "1:733969777138:web:493007095644585f166b6b",
  measurementId: "G-GNVYJR4KQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthStack = createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
})
const AppStack = createStackNavigator({
  Home:Home
})

export default createAppContainer(
    createSwitchNavigator(
      {
      Auth:AuthStack,
      App:AppStack,
      Loading:LoadingScreen



    },
    { initialRouteName:'Loading'}
    )
  );
