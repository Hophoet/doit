import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//import the screens
import Home from '../todoComponents/Home'
import Loading from '../todoComponents/Loading'
import Login from '../todoComponents/Login'
import Register from '../todoComponents/Register'
import Enter from '../todoComponents/Enter'
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
