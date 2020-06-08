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


//set of the firebase configurations params
var firebaseConfig = {
    apiKey: "AIzaSyA-3SKgbdKssr0wyaGKecj7LD2tONCzdjo",
    authDomain: "doit-7516a.firebaseapp.com",
    databaseURL: "https://doit-7516a.firebaseio.com",
    projectId: "doit-7516a",
    storageBucket: "doit-7516a.appspot.com",
    messagingSenderId: "83231160054",
    appId: "1:83231160054:web:21989b705c2de7f6eb1ed7"
  };
// Initialize Firebase with the configuration
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
