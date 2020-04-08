import React from 'react'
import {View, Text, TextInput, Dimensions, TouchableWithoutFeedback,
  KeyboardAvoidingView, TouchableOpacity, StyleSheet, Keyboard} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
//doit data import
import doitdata from '../doitData/data'

//Add doit list screen class
export default class AddDoitList extends React.Component{
  //DoitList constructor
  constructor(props){
    super(props);
    this.name = '';
    //set as state the name of the DoitList enter

  }
  //method to create DoitList with the entering name
  createDoit =  ()=>{
    //get of the name
    const name = this.name;
    //set of the name to empty string
    this.name = '';

    const color = '#00cdff'
    //condition of the name is not empty
    if(name.length != 0){
      //add the name into the data
      doitData.push({
        name,
        color,
        doits:[]
      })
      //clasing of the Doit list modal
      this.props.closeModal();}
  }
  //AddDoitList components render method
  render(){
    return(
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View  style={styles.container}>

          <View style={styles.design}/>
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={this.props.closeModal}
            >
            <AntDesign name='close' color='white' size={30}/>
          </TouchableOpacity>
          <View style={styles.form}>
            <Text style={styles.title}>Create Doit</Text>
            <TextInput
              placeholder='Doit name'
              autoFocus={true}
              onChangeText={text=>{this.name = text.trim().toLowerCase()}}
              onSubmitEditing={this.createDoit}
              style={styles.textinput}/>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress = {this.createDoit}
              >
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  closeContainer:{
    alignSelf:'flex-end',
    margin:20,
  },
  form:{
    flex:1,
  },
  title:{
    fontSize:30,
    alignSelf:'center'
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
  buttonContainer:{
    backgroundColor:'#1FA9FF',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    height:40,
    width:Dimensions.get('window').width/2,
    alignSelf:'center',
    borderRadius:4

  },
  buttonText:{
    color:'white',
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
