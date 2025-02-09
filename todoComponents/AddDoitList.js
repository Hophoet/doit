import React from 'react'
import {View, Text, TextInput, Dimensions, TouchableWithoutFeedback,
  KeyboardAvoidingView, TouchableOpacity, StyleSheet, Keyboard} from 'react-native'
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons'
import colors from '../constants/Colors'
import Toast from './toasts/Toast'
//Add doit list screen class
export default class AddDoitList extends React.Component{
  //DoitList constructor
  constructor(props){
    super(props);
    this.name = '';
    //set as state the name of the DoitList enter
    this.state = {
    }

  }

  //method to create DoitList with the entering name
  createDoit =  ()=>{
    //get of the name
    const name = this.name.trim().toLowerCase();
    //get of the item title
    //set of the name to empty string

    let exists = false;
    //condition to get of the add title is alraidy exist
    for(let doit of this.props.doits){
      if(doit.name === name){
        exists = true;
        break;
      }
    }
    if(!exists){
      //condition of the name is not empty
      if(name.length != 0){
        //add the name into the data
        // this.props.database.push({
        //   name,
        //   tasks:[]
        // })
        const action = {
           type:'ADD_NEW_DOIT',
            value:{name:name, tasks:[]}
          }
        this.props.dispatch(action)
        //clasing of the Doit list modal
        this.props.closeModal();

      }
      else{
        Toast._show_center_toast('Enter the doit title')

      }
    }
    else{
      // this.setState({error:'Doit '})
      Toast._show_center_toast('Doit already exists ')


  }

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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Create new <Text style={styles.doitText}>Doit</Text></Text>
            </View>
            <TextInput
              placeholder='Doit title'
              autoFocus={true}
              onChangeText={text=>{this.name = text.trim().toLowerCase()}}
              onSubmitEditing={this.createDoit}
              style={styles.textinput}/>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress = {this.createDoit}
              activeOpacity={.6}
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
  titleContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:Dimensions.get('window').width/5
  }
  ,
  title:{
    fontSize:30,
    alignSelf:'center',
    color:'gray',

  },
  doitText:{
    color:colors.mainColor,
    fontWeight:'bold'
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
    backgroundColor:colors.mainColor,
    marginTop:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    padding:10,
    height:40,
    width:Dimensions.get('window').width/3,
    alignSelf:'center',
    borderRadius:4,
    elevation:10,
    flexDirection:'row',
    marginRight:Dimensions.get('window').width/5


  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:17
  },
  design:{
    backgroundColor:'#1FA9FF',
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width/5,
    position:'absolute',
    right:0,
    top:0,
    alignItems:'center',
  },
  errorText:{
    color:'red',
    alignSelf:'center'
  }
})
