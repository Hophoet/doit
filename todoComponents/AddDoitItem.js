import React from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput, Dimensions, KeyboardAvoidingView, Platform,
        TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback,
        FlatList, Animated} from 'react-native'
import doitdata from '../doitData/data'
import {AntDesign, Ionicons} from '@expo/vector-icons'
//import the Doit items FlatList component
import DoitItem from './DoitItem'

//add doit item class
class AddDoitItem extends React.Component{
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
      refresh: '',
      toolsPosition: new Animated.Value(0)
    }

  }

  componentDidMount(){
    Animated.spring(
      this.state.toolsPosition,
      {
        toValue:this.width/3,
        speed:1,
        bounciness:10
      }
    ).start()

  }

  refreshComponent = ()=>{
    this.setState({refresh:''});
  }

  //method, that add the item to the DoitList
  addItem =  ()=>{
    //get of the item title
    const title = this.state.title.trim().toLowerCase();
    this.setState({title:''})
    const items = this.props.items;
    let exists = false;
    //condition to get of the add title is alraidy exist
    for(let item of this.props.items){
      if(item.title === this.state.title){
        exists = true;
        break;
      }
    }
    //adding condition
    if(!exists){
      //adding of the item after the condition
      // let doitIndex = this.props.doits.findIndex(doit => doit.name === this.props.name)
      // const action = {type:'ADD_TASK', value:{ doitIndex:doitIndex, taskTitle:this.state.title}}
      // this.props.dispatch(action)
      // this.error = '';
      this.props.items.push(
        {
          title:title,
          completed:false
        }
      );
      this.error = ''
    }
    else{
      this.error = 'Name error';

    }

    //Keyboard.dismiss();
  }
  //function to display the all done icon
  doneAll(){
    if(this.props.items.length != 0 && this.props.items.length === this.props.items.filter(item=>item.completed).length){
      return <Ionicons name='md-done-all' color='#1FA9FF' size={30}/>;
    }

  }
  //function to delete doit
  deleteDoit(name){
    const doit = doitdata.filter(doit=>doit.name==name)[0];
    const doitIndex = doitdata.indexOf(doit)
    this.props.closeItem()
    //console.log(this.props.doits.length);
    this.props.doits.splice(doitIndex, 1);

    //doitdata.pop();
    //console.log(this.props.doits.length);
    //console.log(this.props.doits);
    //console.log(doitIndex);

  }

  //Render component method
  render(){

    const items = this.props.items;
    const total_number  = items.length;
    const dones_number = items.filter(item=>item.completed).length;
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
                  <Animated.View style={[styles.toolsContainer, {left:this.state.toolsPosition}]}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <View style={{marginHorizontal:10}}>
                        <Text numberOfLines={3}  style={styles.itemTitle}>{this.props.name} </Text>
                        <Text style={styles.doitInfos}> {dones_number} of {total_number} tasks </Text>

                      </View>
                    </View>

                    <Text style={{color:'gray', marginLeft:5}}></Text>
                  </Animated.View>
                  <Text style={{color:'red'}}>
                  {this.error && this.error}
                  </Text>
                </View>
                <View style={styles.itemsContainer}>
                    <FlatList
                    data={items}
                    keyExtractor={item => item.title}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => <DoitItem parentComponent={this}   item={item}/>}
                      />
                </View>
                <View style={styles.form}>
                  <TextInput
                    placeholder='Task name'
                    onChangeText={(text)=>{this.setState({title:text})  }}
                    onSubmitEditing={this.addItem}
                    value={this.state.title}
                    style={styles.textinput}/>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.addItem}
                    >
                    <Ionicons name='ios-add' size={40} color='white'/>
                  </TouchableOpacity>
                </View>
            </View>

    )
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return {
    dispatch: (action) => { dispatch(action)}
  }
}

const mapStateToProps = (state) => {
  return {
    doits:state.doits
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDoitItem)
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
  textinput:{
    marginLeft:10,
    borderRadius:3,
    backgroundColor:'white',
    elevation:20,
    height:50,
    paddingHorizontal:10,
    width:Dimensions.get('window').width - Dimensions.get('window').width/5
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
    backgroundColor:'#1FA9FF',
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
    marginLeft: Dimensions.get('window').width/6,
    marginTop:20,
    flex:1
  },
  toolsContainer:{
    ...Platform.select({
      'android':{
        backgroundColor:'white'
      }
    }),
    paddingVertical:10,
    elevation:20,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    width:Dimensions.get('window').width,
    paddingRight:Dimensions.get('window').width/3,


  }
})
