import React from 'react'
import {View, Text, TextInput, Dimensions, KeyboardAvoidingView, Platform,
        TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback,
        FlatList, Animated} from 'react-native'
import doitdata from '../doitData/data'
import {AntDesign, Ionicons} from '@expo/vector-icons'
//import the Doit items FlatList component
import DoitItem from './DoitItem'

//add doit item class
export default class AddDoitItem extends React.Component{
  //Constructor of the AddDoitList
  constructor(props){
    super(props);
    //item title
    this.title = '';
    this.error = '';
    this.state = {
      refresh: '',
      toolsPosition: new Animated.Value(0)
    }

  }

  componentDidMount(){
    Animated.spring(
      this.state.toolsPosition,
      {
        toValue:Dimensions.get('window').width/3,
        speed:6,
        bounciness:20
      }
    ).start()

  }

  refreshComponent = ()=>{
    this.setState({refresh:''});
  }

  //method, that add the item to the DoitList
  addItem =  ()=>{
    //get of the item title
    const title = this.title;
    const items = this.props.items;
    let exists = false;
    //condition to get of the add title is alraidy exist
    for(let item of this.props.items){
      if(item.title === this.title){
        exists = true;
        break;
      }
    }
    //adding condition
    if(!exists){
      //adding of the item after the condition
      this.props.items.push(
        {
          title:title,
          completed:false
        }
      );
      this.error = '';
    }
    else{
      this.error = 'Name error';

    }



    this.refreshComponent();
    Keyboard.dismiss();
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
    const doitIndex = doitdata.indexOf(doit);
    console.log(doitIndex);
    this.props.closeItem();
  }

  //Render component method
  render(){
    const items = this.props.items;
    const total_number  = items.length;
    const dones_number = items.filter(item=>item.completed).length;
    return(

  <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View  style={styles.container}>
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
              {this.doneAll()}
              <View style={{marginHorizontal:10}}>
                <Text numberOfLines={3}  style={styles.itemTitle}>{this.props.name} </Text>
                <Text style={styles.doitInfos}> {dones_number} of {total_number} taks </Text>

              </View>
            </View>
              <TouchableOpacity style={{marginLeft:20}} onPress={()=>{ this.deleteDoit(this.props.name)}}>
                <Ionicons name='ios-trash' size={40} color='red'/>
              </TouchableOpacity>
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
              placeholder='Item name'
              onChangeText={(text)=>{this.title = text.trim().toLowerCase() }}
              onSubmitEditing={this.addItem}
              style={styles.textinput}/>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.addItem}
              >
              <AntDesign  size={30} name='plus' color='white'/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>


    )
  }
}

//set of the style properties with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  closeContainer:{
    alignSelf:'center',
    margin:20,
  },
  form:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  title:{
    fontSize:30,
    alignSelf:'center'
  },
  textinput:{
    borderColor:'#1FA9FF',
    borderWidth:0,
    height:60,
    borderRadius:3,
    backgroundColor:'white',
    elevation:10,
    flex:6,
    marginHorizontal:10,
    marginVertical:10,
    paddingHorizontal:10
  },
  buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    height:60,
    flex:2,

    alignSelf:'center',
    borderRadius:4

  },
  buttonText:{
    color:'#1FA9FF',
  },
  design:{
    backgroundColor:'#1FA9FF',

    height:800,
    width:100,
    position:'absolute',
    right:-10,
    top:-10,
    alignItems:'center'
  },
  itemContainer:{
    flex:1,

  },
  itemTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginRight:15
  },
  doitInfos:{
    color:'gray',

  },
  doitContainer:{
    marginTop:60,

  },
  itemsContainer:{
    flex:1,
    marginLeft: Dimensions.get('window').width/6,
    marginTop:40
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
    width:Dimensions.get('window').width/2 + Dimensions.get('window').width/3


  }
})
