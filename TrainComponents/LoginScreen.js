import React from 'react';
import {View, Text, TextInput,Image, Button, TouchableOpacity, StyleSheet,
       KeyboardAvoidingView, Dimensions} from 'react-native';
import  {Ionicons} from '@expo/vector-icons';
import * as firebase from 'firebase';



export default class LoginScreen extends React.Component{
  state = {
    email:'',
    password:'',
    error:null
  }

  _handLog = () =>{
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {this.setState({error:error.message})})

  }
  render(){
    return(

        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <View  style={styles.container}>
            <View style={styles.header}>
              <Text>Welcome on lgo </Text>
              <Text>Please sign in to continue </Text>
              {this.state.error && <Text style={styles.error}>{this.state.error}</Text>}
            </View>
            <View style={styles.form}>
              <TextInput
                onChangeText={email=>{this.setState({email})}}
                style={styles.textinput} placeholder='Email'/>
              <TextInput
                secureTextEntry
                onChangeText={password=>{this.setState({password})}}
                style={styles.textinput} placeholder='Password'/>

              <TouchableOpacity style={styles.button}  onPress ={()=>{this._handLog()}}>
                <Text style={styles.buttonText}>Sign in</Text>
              </TouchableOpacity>
              <Text onPress={()=>{ this.props.navigation.navigate('Register')}}> you don't have an account sign up</Text>

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
    marginBottom:20
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
