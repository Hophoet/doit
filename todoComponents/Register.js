import React from 'react'
import {View, Text, StyleSheet, TextInput,
  KeyboardAvoidingView, TouchableOpacity, Dimensions} from 'react-native'

//Register screen class
export default class Register extends React.Component{
  //Register components render method 
  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.textContainer}>
          </View>
          <View style={styles.design}/>
          <View style={styles.form}>
            <TextInput
              style={styles.textinput}
              placeholder='Name'
              autoCorrect = {false}
              onSubmitEditing={()=> this.refs.email.focus()}
              />
            <TextInput
              style={styles.textinput}
              placeholder='Email'
              autoCorrect={false}
              keyboardType='email-address'
              onSubmitEditing={()=>this.refs.password.focus()}
              ref='email'/>
            <TextInput
              style={styles.textinput}
              placeholder='Password'
              autoCorrect={false}
              onSubmitEditing={()=>this.props.navigation.navigate('Login')}
              ref='password'
              secureTextEntry/>
            <TouchableOpacity
              style={[styles.auth, {alignSelf:'center', marginVertical:20}]}
              onPress= {()=>{this.props.navigation.navigate('Login')}}
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
    backgroundColor:'#1FA9FF',
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
    backgroundColor:'#1FA9FF',

    height:800,
    width:100,
    position:'absolute',
    right:-10,
    top:-10
  }
})
