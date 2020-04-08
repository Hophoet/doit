import React from 'react'
import {View, Text, FlatList, StyleSheet, Modal, TouchableOpacity, Dimensions} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import DoitList from './DoitList'
import AddDoitList from './AddDoitList'

//import the data list
import doitdata from '../doitData/data'
//the Home class
export default class Home extends React.Component{
  //constructor of the Home class
  constructor(props){
    super(props);
    //set of the state of the modal state
    this.state = {
      addDoitListVisible:false,
      addItemTitle:''
    }
  }
  //the Doit List modal close and open method
  closeList = () => {
    this.setState({addDoitListVisible:!this.state.addDoitListVisible})
  }

  //the component render method
  render(){
    return (
      <View style={styles.container}>
        <Modal
          styleType='slide'
          visible={this.state.addDoitListVisible}
          >
          <AddDoitList closeModal = {() => this.closeList()}/>
        </Modal>


        <View style={styles.design}/>
          <AntDesign style={styles.clockIcon} name='user' size={40} color='white'/>
        <View style={styles.toolsContainer}>
          <TouchableOpacity
            style={styles.addDoit}
            onPress={this.closeList}
            >
            <AntDesign name='plus' size={25} color='#1FA9FF' />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>


        </View>

        <View style={styles.doitList}>
          <FlatList
            data={doitdata}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <DoitList list={item} parent={this.state} />
                    ) }/>
          </View>
          <Text onPress={()=>{this.props.navigation.navigate('Enter')}}>Enter</Text>
          <Text onPress={()=>{this.props.navigation.navigate('Auth')}}>Authentification</Text>
      </View>
    )
  }
}

//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',

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
  clockIcon:{
    margin:10
  },
  textContainer:{
    alignItems:'center'
  },
  addDoit:{
    borderWidth:1,
    padding:5,
    borderColor:'#1FA9FF',
    borderColor:'white'
  },
  doitList:{
    height:300,
    marginTop:30,
    marginRight:Dimensions.get('window').width/5,

  },
  toolsContainer:{
    flexDirection:'row',
    marginTop:10,
    backgroundColor:'white',
    paddingVertical:10,
    elevation:20,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    width:Dimensions.get('window').width/3,
    alignSelf:'flex-end',

  }
})
