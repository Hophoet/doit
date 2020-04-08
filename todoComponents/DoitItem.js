import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import doitData from '../doitData/data';

//Doit Item Class
export default class DoitItem extends React.Component{

    state = {
      toggleTask:''
    }

  //toogleTask method to valid the task
  toggleTask(title){
    //doit = doitdata.filter(doit => doit.name==this.props.name)[0];
    //index = doitdata.indexOf(doit)
    //doitdata[index]['doits']
    let doit, doitIndex, item, itemIndex;
    doit = doitData.filter(doit => doit.name == this.props.parentComponent.props.name)[0];
    doitIndex = doitData.indexOf(doit);
    item = doitData[doitIndex]['doits'].filter(item => item.title === title)[0];
    itemIndex = doitData[doitIndex]['doits'].indexOf(item);
    doitData[doitIndex]['doits'][itemIndex].completed = !doitData[doitIndex]['doits'][itemIndex].completed
    //console.log(doitData[doitIndex]['doits'][itemIndex].completed);
    this.props.parentComponent.refreshComponent();



 }
  //DoitItem components render method
  render(){
    const item = this.props.item;

    return(
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>{ this.toggleTask(item.title)}}>
          <Ionicons
            size={24}
            name={item.completed? 'md-radio-button-on': 'md-radio-button-off'}
            color={'gray'}

            />
        </TouchableOpacity>
        <Text
          style={[styles.itemTitle,
                {textDecorationLine:item.completed?'line-through':'none',
                color:item.completed?'gray':'black'}]}>
        {item.title}</Text>
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
