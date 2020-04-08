import React from 'react';
import {View, Text, TextInput,Image, Button, TouchableOpacity, StyleSheet,
       KeyboardAvoidingView, Dimensions} from 'react-native';

export default class LoginScreen extends React.Component{
  state = {
    name:'',
    email:'',
    password:''
  }
  render(){
    return(

        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <View  style={styles.container}>




            <View style={styles.bloc}>
              <Text style={styles.first}>Welcome to</Text>
              <Text style={styles.second}>Hophoet</Text>
              <Text style={styles.third}></Text>
            </View>
            <View style={styles.imageContainer}><Image style={styles.image} source={require('../assets/images/u.jpg')}/></View>
              <View style={styles.design2}/>
            </View>

          </KeyboardAvoidingView>




    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'blue',


  },
  second:{
    fontSize:27,
    fontWeight:'bold',
    marginBottom:7,
  },
  third:{

    fontSize:20,
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
