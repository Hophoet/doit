import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import AddDoitItem from './AddDoitItem'
//get of the doit data
import doitdata from '../doitData/data'


//DoitList screen class
export default class DoitList extends React.Component{
  constructor(props){
    super(props);
  }
  //set of the state of the modal state
  state = {
    addDoitItemVisible:false
  }
  //the Doit item modal close and open method
  closeItem = () => {
    this.setState({addDoitItemVisible:!this.state.addDoitItemVisible})
  }

  //DoitList components render method
  //<AntDesign name='edit' size={30} color='black' style={styles.editButtonIcon}/>
  render(){
    const doits = this.props.list['doits'];
    const total_items  = doits.length;
    const total_done_items = doits.filter(item=>item.completed).length;
    //console.log(total_items);
    //console.log(total_done_items);
  return(
    <View style={[styles.container]} activeOpacity={0.5}>
      <Modal
        styleType='slide'
        visible={this.state.addDoitItemVisible}


        >
        <AddDoitItem   parent={this.props.parent} name={this.props.list.name} items={this.props.list.doits} closeItem = {() => this.closeItem()}/>
      </Modal>

      <TouchableOpacity onPress={() => {this.closeItem()}} style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>{this.props.list.name}</Text>
      </TouchableOpacity>
      <View style={styles.doitInfo}>
        <Text style={styles.number}>{total_done_items}</Text>
        <Text style={styles.betweenNumbers}>of</Text>
        <Text style={styles.number}>{total_items}</Text>
      </View>

    </View>
  );}
}



//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    width:200,
    marginVertical:20,
    marginHorizontal:30,
    borderRadius:6,
    backgroundColor:'white',
    elevation:8,
    

  },
  title:{
    fontSize:20,
    fontWeight:"300",
    color:'#1FA9FF',
    alignSelf:'center',
  },
  editButtonContainer:{
    backgroundColor:'white',
    padding:5,
    borderRadius:60,
    alignSelf:'flex-start',

  },
  titleContainer:{
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:20,

  },
  doitInfo:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  number:{
    fontSize:40,
    color:'gray'
  },
  betweenNumbers:{
    color:'gray'
  }
})
