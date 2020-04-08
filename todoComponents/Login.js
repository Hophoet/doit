import React from 'react'
import {View, TextInput, Text, StyleSheet,
  TouchableOpacity, Dimensions, KeyboardAvoidingView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

//Login screen class
export default class Login extends React.Component{
  //Login constructor
  constructor(props){
    super(props);
    //set of the state, the user email and password
    this.email = '';
    this.password = '';
  }

  //login to the Home screen method
 login = ()=> {
    this.props.navigation.navigate('Home')
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
            onSubmitEditing={this.login}/>
          <TouchableOpacity
            style={[styles.auth, {alignSelf:'center', marginVertical:20}]}
            onPress= {()=>{this.props.navigation.navigate('Enter')}}
            >
            <Text style={styles.authText}>Validate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Register')}}
            >
            <Text
              style={{ textAlign:'center'}}
            >{`Haven't account\nRegister`}</Text>

          </TouchableOpacity>
          <View>
            <Text onPress={()=>{this.props.navigation.navigate('Enter')}}>Enter</Text>
          </View>
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
    right:0,
    top:0,
    alignItems:'center',

  },
  clockIcon:{
    margin:10
  }
})
