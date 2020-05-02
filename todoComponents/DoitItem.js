import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import doitData from '../doitData/data';

//Doit Item Class
export default class DoitItem extends React.Component{
    constructor(props){
      super(props)
      this.database = require('../database/data').doits
    }
    state = {
      toggleTask:''
    }

  //toogleTask method to valid the task
  toggleTask(title){
    //doit = doitdata.filter(doit => doit.name==this.props.name)[0];
    //index = doitdata.indexOf(doit)
    //doitdata[index]['doits']
    let doit, doitIndex, item, itemIndex;
    doit = this.database.filter(doit => doit.name == this.props.parentComponent.props.name)[0];
    doitIndex = this.database.indexOf(doit);
    item = this.database[doitIndex]['tasks'].filter(item => item.title === title)[0];
    itemIndex = this.database[doitIndex]['tasks'].indexOf(item);
    this.database[doitIndex]['tasks'][itemIndex].completed = !this.database[doitIndex]['tasks'][itemIndex].completed
    //console.log(doitData[doitIndex]['doits'][itemIndex].completed);
    this.props.parentComponent.refreshComponent();



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
            color={task.completed? 'gray': '#1FA9FF'}

            />
        </TouchableOpacity>
        <Text
          style={[styles.itemTitle,
                {textDecorationLine:task.completed?'line-through':'none',
                color:task.completed?'gray':'black'}]}>
        {task.title}</Text>
      </View>
    );
}
}


//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{

  },
  title:{
    fontSize:25,
    fontWeight:"300",
    color:'white',

  },
  editButtonContainer:{
    backgroundColor:'#1FA9FF',
    padding:5,
    borderRadius:60,
    alignSelf:'flex-start',
    left:-5,
    top:-5
  },
  itemContainer:{
    marginBottom:10,
    flexDirection:'row',
  },
  itemTitle:{
    marginLeft:10
  }
})
