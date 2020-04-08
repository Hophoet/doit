import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity,
   Dimensions, KeyboardAvoidingView, Image} from 'react-native';
import * as firebase from 'firebase';
export default class Home extends React.Component{
  state = {
    email:'',
    name:''
  }

  componentDidMount(){
    const {email, name} = firebase.auth().currentUser;

    this.setState({email, name});
  }

  signOutUser(){
    firebase.auth().signOut();
  }

  render(){

    return (

        <View  style={styles.container}>
            <Text>Welcome {this.state.email}! on lgo app</Text>
            <Text onPress={()=>{this.signOutUser()}}>Logout</Text>
          </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',




  },
  second:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:7
  },
  third:{
    fontWeight:'bold',
    opacity:0.6,
    marginBottom:5
  },
  bloc:{
    elevation:12,
    marginLeft:5
  },

  design:{
    backgroundColor:'aqua',
    width:300,
    height:300,
    position:'absolute',


    borderRadius:500/2,
    shadowOpacity:3,
    shadowRadius:7,
    top:-100,
    right:-100
  },
  imageContainer:{
    height:120,
    width:120,
    borderRadius:60,
    elevation:12,
    marginBottom:30,
    marginLeft:5

  },
  image:{
    height:120,
    width:120,
    borderRadius:60,


  },
  design2:{
    backgroundColor:'white',
    height:350,
    width:350,
    rotation:400,
    borderRadius:30,
    position:'absolute',
    left:-130

  }
});
