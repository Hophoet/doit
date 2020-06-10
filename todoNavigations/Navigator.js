import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//import the screens
import Home from '../todoComponents/Home'
import Loading from '../todoComponents/Loading'
import Login from '../todoComponents/Login'
import Register from '../todoComponents/Register'
import Enter from '../todoComponents/Enter'


//app stack navigator
const AppStack = createStackNavigator({
  Home:{
    screen:Home
  }
})

export default createAppContainer(
  createSwitchNavigator({
    App: AppStack,
    Enter:Enter

  },{
    initialRouteName:'Enter'
  })
)
