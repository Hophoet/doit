import React from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';


export default class Logo extends React.Component{
  render(){
    return(

        <View style={styles.container}>

          <View style={styles.display}></View>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>logo</Text>
            <View style={styles.icon}/>
          </View>
          <View style={styles.form}>
            <View style={styles.textinputView}>
              <TextInput style={styles.textinput} placeholder='Email'/>
            </View>
            <View style={styles.textinputView}>
              <TextInput style={[styles.textinput, {width:250}]} placeholder='Password'/>
            </View>
          </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,



  },
  display:{
    position:'absolute',
    height:500,
    width:500,
    backgroundColor:'white',
    alignSelf:'center',
    borderWidth:50,
    borderColor:'blue',
    rotation:-500,
    left:-300,
    top:100

  },
  logoContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:80
  },
  icon:{
    backgroundColor:'white',
    height:25,
    width:25,
    marginLeft:10,
    borderWidth:7,
    borderColor:'blue',
    rotation:500
  },
  logoText:{
    fontSize:30,
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'blue'
  },
  form:{

    marginTop:70,
    marginLeft:20
  },
  textinputView:{
    marginBottom:20
  },
  textinput:{

    borderRadius:35,
    paddingHorizontal:15,
    height:45,
    color:'black',
    backgroundColor:'white',
    fontSize:15,
    elevation:20,
    shadowOpacity:30,
    shadowRadius:10,
    marginRight:20
  }
})
