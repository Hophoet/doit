import React from 'react';
import {View, Text, TextInput,Image, Button, TouchableOpacity, StyleSheet,
       KeyboardAvoidingView, Dimensions} from 'react-native';
import  {Ionicons} from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{
  state = {
    name:'',
    email:'',
    password:'',
    error:null

  }


  signUp(){
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(credentialUser => {
        return credentialUser.user.updateProfile({ name:this.state.name });
      })
      .catch(error => { this.setState({error:error.message})})
  }
  render(){
    return(

        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <View  style={styles.container}>
            <View style={styles.header}>
              <Text>Welcome on lgo </Text>
              <Text>Please sign up to continue </Text>
              {this.state.error && <Text style={styles.error}>{this.state.error}</Text>}
            </View>
            <View style={styles.form}>
              <TextInput
                autoCapitalize='none'
                onChangeText ={name=>{this.setState({name})}}
                style={styles.textinput} placeholder='Name'/>
              <TextInput
                autoCapitalize='none'
                onChangeText= {email =>{this.setState({email})}}
                style={styles.textinput} placeholder='Email'/>
              <TextInput
                onChangeText = {password=>{this.setState({password})}}
                style={styles.textinput}
                secureTextEntry
                placeholder='Password'/>

              <TouchableOpacity style={styles.button} onPress={()=>{this.signUp()}}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              <Text onPress={()=>{this.props.navigation.navigate('Login')}}> you have already an account Sing in</Text>

            </View>
          </View>

          </KeyboardAvoidingView>




    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginLeft:10
  },
  header:{
    marginBottom:30
  },
  form:{

  },
  textinput:{
    marginBottom:20,

  },
  button:{
    backgroundColor:'red',
    padding:5,
    height:40,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  buttonText:{
    color:'white',
    fontWeight:'bold'
  },
  error:{
    color:'red'
  }
})
