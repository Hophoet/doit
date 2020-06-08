import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity,
  Dimensions, Button} from 'react-native'
import * as firebase from 'firebase';
//Loading class
export default class Loading extends React.Component{
  //Loading Loading component render method
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
      //navigate to the app is the user is authentificate else navigate to the auth screen(login, register)
      console.log(user)
      this.props.navigation.navigate(user?'App':'Auth')
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <ActivityIndicator size='large'/>
        </View>
      </View>
    )
  }
}
//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  textContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  auth:{
    backgroundColor:'#ff00ff',
    width:Dimensions.get('window').width/3,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  authText:{
    color:'white'
  }
})
