import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'

//Enter show screen class
export default class Enter extends React.Component{
  //Component dit mount method redefinition
  componentDidMount(){
    //set of the time to log the the App screen
    setTimeout(
      () => {this.props.navigation.navigate('App')}
    , 3000)
  }
  //Enter components render method
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.design}/>
        <View >
          <Ionicons style={styles.clockIcon} name='ios-timer' size={70} color='#1FA9FF'/>
        </View>
        <View style={styles.textContainer}>
          <Text>Doit</Text>
          <Text>Make your time effective</Text>
        </View>

      </View>
    )
  }

}

//set of the styles with StyleSheet
const styles  = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  design:{
    backgroundColor:'#1FA9FF',
    height:800,
    width:100,
    position:'absolute',
    right:-10,
    top:-10
  },
  textContainer:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10


  },
  firstText:{
    fontSize:50,
    fontWeight:'bold'
  },
  secondText:{
    borderRadius:10
  }
})
