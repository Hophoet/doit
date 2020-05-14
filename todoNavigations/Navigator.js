import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//import the screens
import Home from '../todoComponents/Home'
import Loading from '../todoComponents/Loading'
import Login from '../todoComponents/Login'
import Register from '../todoComponents/Register'
import Enter from '../todoComponents/Enter'
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
  Login:{
    screen:Login,
    navigationOptions:{
      headerTitle:'Login'
    }
  },
  Register:{
    screen:Register,
    navigationOptions:{
      headerTitle:'Register'
    }
  }
})

const AppStack = createStackNavigator({
  Home:{
    screen:Home
  }
})

export default createAppContainer(
  createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack,
    Loading:Loading,
    Enter:Enter

  },{
    initialRouteName:'Enter'
  })
)
