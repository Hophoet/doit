import React from 'react'
import {View, Text, TextInput, Dimensions, KeyboardAvoidingView,
        TouchableOpacity, StyleSheet,
        FlatList, Animated} from 'react-native'
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'
//import the Doit items FlatList component
import DoitItem from './DoitItem'
import colors from '../constants/Colors'

//add doit item class
export default class AddDoitItem extends React.Component{
  //Constructor of the AddDoitList
  constructor(props){
    super(props);
    //screen Dimensions
    this.width = Dimensions.get('window').width,
    this.height = Dimensions.get('window').height,
    //item title
    this.error = '';
    this.state = {
      title:'',
      titlePosition: new Animated.Value(this.width/5)
    }

  }

  componentDidMount(){
    Animated.spring(
      this.state.titlePosition,
      {
        toValue:this.width/3,
        speed:1,
        bounciness:10
      }
    ).start()
    // if(!this.props.tasks.length){
    //   Keyboard.show()
    // }

  }



  //method, that add the item to the DoitList
  addItem =  ()=>{
    //get of the item title
    const title = this.state.title.trim().toLowerCase();
    //checking if the title is not null
    if(title){
      this.setState({title:''})
      const tasks = this.props.tasks;
      let exists = false;
      //condition to get of the add title is alraidy exist
      for(let task of tasks){
        if(task.title === title){
          exists = true;
          break;
        }
      }
      //adding condition
      if(!exists){
        //get of the current doit index
        let doitIndex = this.props.doits.findIndex(doit => doit.name === this.props.name)
        //building of the task add action
        const action = {type:'ADD_NEW_TASK', value:{ doitName:this.props.name, taskTitle:title}}
        //execuction of the action with the dispatch method
        this.props.dispatch(action)
        //set of the error message to empty
        this.error = ''
      }
      //error condition
      else{
        //set of the error message
        this.error = 'Name error';

      }

      //Keyboard.dismiss();
    }
  }
  //function to display the all done icon
  doneAll(){
    if(this.props.tasks.length != 0 && this.props.tasks.length === this.props.tasks.filter(task=>task.completed).length){
      return <Ionicons name='md-done-all' color='#1FA9FF' size={30}/>;
    }

  }
  //function to delete doit
  _deleteDoit(name){
    this.props.closeItem()
    let action = {type:'DELETE_DOIT', value:{doitName:name}}
    this.props.dispatch(action)
  }

  //Render component method
  render(){
    const tasks = this.props.tasks;
    const total_number  = tasks.length;
    const dones_number = tasks.filter(task=>task.completed).length;
    return(
            <View style={styles.container} >
                <View style={styles.design}>
                  <TouchableOpacity
                    style={styles.closeContainer}
                    onPress={ this.props.closeItem}
                    >
                    <AntDesign name='close' color='white' size={30}/>
                  </TouchableOpacity>
                </View>


                <View style={styles.doitContainer} >
                  <Animated.View style={[styles.titleContainer, {left:this.state.titlePosition}]}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <View style={{marginHorizontal:10}}>
                        <Text numberOfLines={3}  style={styles.itemTitle}>{this.props.name} </Text>
                        <Text style={styles.doitInfos}> {total_number - dones_number} of {total_number} tasks </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      activeOpacity={.7}
                      style={styles.deleteDoit}
                      onPress={()=> {this._deleteDoit(this.props.name)}}
                          >
                      <Entypo name='trash' color='white' size={30}/>
                    </TouchableOpacity>

                  </Animated.View>
                  <View style={styles.entryErrorContainer}>
                    <Text style={styles.entryErrorText}>{this.error && this.error}</Text>
                  </View>
                </View>
                <View style={styles.itemsContainer}>
                    <FlatList
                    data={tasks}
                    keyExtractor={item => item.title}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => <DoitItem dispatch={this.props.dispatch} doitName={this.props.name} task={item}/>}
                      />
                </View>
                <View style={styles.form}>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      placeholder='Task name'
                      onChangeText={(text)=>{this.setState({title:text})  }}
                      onSubmitEditing={this.addItem}
                      value={this.state.title}
                      style={styles.textinput}
                      autoFocus={tasks.length?false:true}
                      />
                    </View>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={ ()=> {this.addItem()}}
                    >
                    <Ionicons name='ios-add' size={40} color='white'/>
                  </TouchableOpacity>
                </View>
            </View>

    )
  }
}


//set of the style properties with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  closeContainer:{
    alignSelf:'center',
    margin:20,
  },
  form:{
    flexDirection:'row',
    paddingVertical:20,

  },
  title:{
    fontSize:30,
    alignSelf:'center'
  },
  textInputContainer:{
    paddingHorizontal:10
  },
  textinput:{
    borderWidth:1,
    borderColor:colors.mainColor,
    borderRadius:3,
    backgroundColor:'white',
    elevation:20,
    height:50,
    paddingHorizontal:10,
    width:Dimensions.get('window').width - (Dimensions.get('window').width/5+20)
  },
  buttonContainer:{
    width:Dimensions.get('window').width/5,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:'#1FA9FF',
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
  itemTitle:{
    fontSize:20,
    fontWeight:'bold',
  },
  doitInfos:{
    color:'gray',

  },
  doitContainer:{
    marginTop:60,

  },
  itemsContainer:{
    marginLeft: Dimensions.get('window').width/8,

    marginTop:20,
    flex:1
  },
  titleContainer:{
    backgroundColor:'white',
    marginTop:10,
    elevation:20,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    width:Dimensions.get('window').width,
    paddingRight:Dimensions.get('window').width/3,



  },
  deleteDoit:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60,
    padding:10,
    backgroundColor:colors.mainColor,
    alignSelf:'flex-end',
    elevation:20,
    borderWidth:2,
    borderColor:'white',
    bottom:-20,
    marginRight:10
  },
  entryErrorContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width/3,
    padding:2
  },
  entryErrorText:{
    color:'red'
  }
})
