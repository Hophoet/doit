import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Dimensions} from 'react-native'

//Loading class
export default class Loading extends React.Component{
  //Loading Loading component render method
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>

          <ActivityIndicator size='large'/>
          <Text>Loading screen</Text>
          <TouchableOpacity
            style={styles.auth}
            onPress= {()=>{this.props.navigation.navigate('Auth')}}
            >
            <Text style={styles.authText}>Authentification</Text>
          </TouchableOpacity>
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
