import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Modal, Dimensions} from 'react-native'
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'
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
    addDoitItemVisible:false,
  }
  //the Doit item modal close and open method
  closeItem = () => {
    this.setState({addDoitItemVisible:!this.state.addDoitItemVisible})
  }


  //function to delete doit
  //function to delete doit
  _deleteDoit(name){
    let action = {type:'DELETE_DOIT', value:{doitName:name}}
    this.props.dispatch(action)
  }

  //DoitList components render method
  //<AntDesign name='edit' size={30} color='black' style={styles.editButtonIcon}/>
  render(){
    const doit = this.props.doit
    const tasks = doit.tasks;
    const total_tasks  = tasks.length;
    const total_done_tasks = tasks.filter(task=>task.completed).length;

    //console.log(this.props.homeRefresh)
    //console.log(this.props.list.doits);
  return(

    <TouchableOpacity style={[styles.container]} onPress={() => {this.closeItem()}} activeOpacity={0.7}>
      <Modal
        styleType='slide'
        visible={this.state.addDoitItemVisible}
        >
        <AddDoitItem dispatch={this.props.dispatch} doits={this.props.doits} name={doit.name} tasks={doit.tasks} closeItem = {() => this.closeItem()}/>
      </Modal>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>{doit.name}</Text>
      </View>

      <View style={[styles.listBody]}>

        <View style={styles.info}>
          <View style={styles.side}>
            <Text style={styles.number}>{total_tasks - total_done_tasks}</Text>
          </View>
          <View style={styles.side}>
            <Text style={styles.number}>{total_tasks}</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name='list' size={90} color={total_done_tasks== total_tasks?'#1FA9FF': '#1FA9FF'}/>
        </View>
      </View>

    </TouchableOpacity>
  );}
}


//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    width:Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/3,
    marginVertical:20,
    marginHorizontal:30,
    borderRadius:6,
    backgroundColor:'#ffffff',
    elevation:8,
  },
  title:{
    fontSize:20,
    fontWeight:"300",
    color:'gray',
    alignSelf:'center',
    marginHorizontal:5
  },
  editButtonContainer:{
    backgroundColor:'white',
    padding:5,
    borderRadius:60,
    alignSelf:'flex-start',

  },
  doitInfo:{
    justifyContent:'center',
    flexDirection:'row'

  },
  number:{
    fontSize:20,
    color:'gray'
  },
  betweenNumbers:{
    color:'gray',
    marginHorizontal:10
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginHorizontal:5
  },
  button:{
    backgroundColor:'white',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    width:70,

  },
  listBody:{
    flexDirection:'row',
    justifyContent:'center',
    margin:5,
  },
  side:{
    opacity:.5
  },
  text:{
    color:'gray',
  },
  iconContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  info:{
    justifyContent:'space-evenly',
    alignItems:'center',

  }
})
