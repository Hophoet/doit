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
    // reset the error state
    this.setState({error:null, is_loading:true})
    firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(credentialUser => {
        return credentialUser.user.updateProfile({ name:this.name });
      })
      .catch(error => {
        console.log(error.key)
        this.setState({error:error.message})
        this.setState({is_loading:false})
      })

  }
  //Register components render method
  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.textContainer}>
          </View>
          <View style={styles.design}/>
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
              style={[styles.auth, {alignSelf:'center', marginVertical:20}]}
              onPress= {this._signUp}
              >
              <Text style={styles.authText}>Validate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems:'center'}}
              >
              <Text
                onPress={()=>{this.props.navigation.navigate('Login')}}
                style={{ textAlign:'center'}}
              >{'I Have an account\nLogin'}</Text>
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
  authText:{
    color:'white'
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
    alignItems:'center'
  },
  errorText:{
    color:'red',
    textAlign:'center'
  }
})
