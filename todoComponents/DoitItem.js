import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import colors from '../constants/Colors'

//Doit Item Class
export default class DoitItem extends React.Component{
    constructor(props){
      super(props)
    }


  //toogleTask method to valid the task
  toggleTask(title){
    //building of the toogle task reduce action
    let action = {type:'TOOGLE_ONE_TASK', value:{taskTitle:title, doitName:this.props.doitName} }
    //excecution of the action
    this.props.dispatch(action)
 }
  //DoitItem components render method
  render(){
    const task = this.props.task;
    return(
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>{ this.toggleTask(task.title)}}>
          <Ionicons
            size={24}
            name={task.completed? 'md-radio-button-on': 'md-radio-button-off'}
            color={task.completed? 'gray': colors.mainColor}

            />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{ this.toggleTask(task.title)}}>
          <Text
            style={[styles.itemTitle,
                  {textDecorationLine:task.completed?'line-through':'none',
                  color:task.completed?'gray':'black'}]}>
          {task.title}</Text>
        </TouchableOpacity>
      </View>
    );
}
}


//set of the styles with StyleSheet
const styles = StyleSheet.create({

  editButtonContainer:{
    backgroundColor:'#1FA9FF',
    padding:5,
    borderRadius:60,
    alignSelf:'flex-start',
    left:-5,
    top:-5
  },
  itemContainer:{
    marginBottom:20,
    paddingRight:20,
    flexDirection:'row',
    alignItems:'center',

  },
  itemTitle:{
    marginLeft:10,
    fontSize:15

  }
})
