import React from 'react'
import {View, Text, StyleSheet, TextInput, ActivityIndicator,
  KeyboardAvoidingView, TouchableOpacity, Dimensions} from 'react-native'
import colors from '../constants/Colors'
import * as firebase from 'firebase';

//Register screen class
export default class Register extends React.Component{
  //register constructor
  constructor(props){
    super(props);
    //set of the state, the user email and password
    this.email = '';
    this.password = '';
    this.state = {
      error:null,
      is_loading:false
    }
  }
  _loading = ()=> {
    if(this.state.is_loading){
      return (
        <ActivityIndicator size='large' />
      )
    }

  }
  _signUp = ()=>{
    //checking if the not alrady loading
    if (!this.state.is_loading){
      // reset the register error state, and the loading variable to true
      this.setState({error:null, is_loading:true}, ()=> {
      // call of the user creation method
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(credentialUser => {
          return credentialUser.user.updateProfile({ name:this.name });
        })
        .catch(error => {
          //set the error message to display
          this.setState({is_loading:false})
          //set the loading variable the false to stop the loading indicator
          this.setState({error:error.message})
        })
      })
  }
  }

  //navigate method
  _navigate_to = (screenName)=> {
    this.props.navigation.navigate(screenName)
  }

  //Register components render method
  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.textContainer}>
          </View>
          <View style={styles.design}/>
          <View style={styles.headerContainer}>
            <Text style={styles.headerFirstText}>Create Account</Text>
          </View>
          <View>
          {this._loading()}
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.textinput}
              onChangeText={(name)=>{this.name=name}}
              placeholder='Name'
              autoCorrect = {false}
              onSubmitEditing={()=> this.refs.email.focus()}
              />
            <TextInput
              style={styles.textinput}
              onChangeText={(email)=>{this.email=email}}
              placeholder='Email'
              autoCorrect={false}
              keyboardType='email-address'
              onSubmitEditing={()=>this.refs.password.focus()}
              ref='email'/>
            <TextInput
              style={styles.textinput}
              onChangeText={(pwr)=>{this.password=pwr}}
              placeholder='Password'
              autoCorrect={false}
              onSubmitEditing={this._signUp}
              ref='password'
              secureTextEntry/>
            <TouchableOpacity
              activeOpacity={.8}
              style={[styles.auth, {alignSelf:'center', marginVertical:20}]}
              onPress= {this._signUp}
              >
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={.8}
              style={styles.footerContainer}
              onPress={()=>{this._navigate_to('Login')}} >
              <Text style={styles.footerFirstText}>Don't have an account?</Text>
              <Text style={styles.footerSecondText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  auth:{
    backgroundColor:colors.mainColor,
    width:Dimensions.get('window').width/3,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  signUpButtonText:{
    color:'white',
    fontSize:17,
    fontWeight:'bold'
  },
  textContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  textinput:{
    marginTop:20,

    borderColor:'red',
    paddingHorizontal:10,
    height:45,
    marginHorizontal:20,
    borderRadius:6,
    backgroundColor:'white',
    elevation:10
  },
  form:{

  },
  design:{
    backgroundColor:colors.mainColor,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width/5,
    position:'absolute',
    right:-10,
    top:-10
  },
  errorContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  errorText:{
    color:'red',
    textAlign:'center'
  },
  footerContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  },
  footerFirstText:{
    color:'gray'
  },
  footerSecondText:{
    color:colors.mainColor,
    fontWeight:'bold',
    marginHorizontal:5
  },
  headerContainer:{
    marginLeft:20,
  },
  headerFirstText:{
    fontWeight:'bold',
    fontSize:25
  }
})
