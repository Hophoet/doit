import React from 'react'
import {View, TextInput, Text, StyleSheet, ActivityIndicator,
  TouchableOpacity, Dimensions, KeyboardAvoidingView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../constants/Colors'
import * as firebase from 'firebase';

//Login screen class
export default class Login extends React.Component{
  //Login constructor
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
  _handLog = () =>{
    //checking if the not alrady loading
    if (!this.state.is_loading){
      // reset the error state , the acive of the loading state
      this.setState({is_loading:true, error:null}, () =>{
      //get of the entry info (email, password )
      const email = this.email
      const password = this.password
      //call of the signing function with the email,and password
      firebase.auth().signInWithEmailAndPassword(email, password)
        //catching the error if it is occured
        .catch(error => {
          //set the loading variable the false to stop the loading indicator
          this.setState({is_loading:false})
          //set the error message to display
          this.setState({error:error.message})})
      })
  }

  }

  //navigate method
  _navigate_to = (screenName)=> {
    this.props.navigation.navigate(screenName)
  }
  //Login components render method
  render(){
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.textContainer}>
        </View>
        <View style={styles.design}>
          <AntDesign style={styles.clockIcon} name='clockcircleo' size={40} color='white'/>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerFirstText}>Login</Text>
          <Text style={styles.headerSecondText}>Please sign in to continue.</Text>
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
            autoCorrect={false}
            keyboardType='email-address'
            onSubmitEditing={()=>this.refs.password.focus()}
            onChangeText={(email)=>{this.email = email;}}
            placeholder='Email'/>
          <TextInput
            style={styles.textinput}
            ref='password'
            autoCorrect={false}
            secureTextEntry
            placeholder='Password'
            onChangeText={(password)=>{this.password = password;}}
            onSubmitEditing={this._handLog}/>
          <TouchableOpacity
            activeOpacity={.8}
            style={[styles.auth, {alignSelf:'center', marginVertical:20}]}
            onPress= {this._handLog}
            >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.8}
            style={styles.footerContainer}
            onPress={()=>{this._navigate_to('Register')}} >
            <Text style={styles.footerFirstText}>Don't have an account?</Text>
            <Text style={styles.footerSecondText}>Sign up</Text>
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
  loginButtonText:{
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
    right:0,
    top:0,
    alignItems:'center',

  },
  clockIcon:{
    margin:10
  },
  errorContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
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
  },
  headerSecondText:{
    color:'gray',
    marginTop:5
  }
})
