import React from 'react'
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native'
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'
import colors from '../constants/Colors'
import * as Font from 'expo-font';

//Enter show screen class
export default class Enter extends React.Component{
  constructor(props){
    super(props)
    //screen dimensions
    this.width = Dimensions.get('window').width
    this.height = Dimensions.get('window').height
    this.state = {
      LeftText: new Animated.Value(Dimensions.get('window').width/2)
    }

  }
    _loadFont = () => {}
  //Component dit mount method redefinition
  componentDidMount(){
    //set of the time to log the the App screen
      setTimeout(
        () => {
          this.props.navigation.navigate('App')
        }
     , 3000)
    Animated.spring(
      this.state.LeftText,
      {
        toValue:0,
        speed:2,
        bounciness:5
      }
    ).start(()=>{
      // this.props.navigation.navigate('App')
    })


  }
  //Enter components render method
  render(){
    //animation initial position

    return(
      <View style={styles.container}>
        <View style={styles.design}/>

          <View style={styles.textContainer}>
            <Text style={styles.doItText}>Doit</Text>
          </View>

        <Animated.View style={[styles.secondContainer, {   left:this.state.LeftText }]}>
          <Text style={styles.secondText}><Text style={styles.bmpText}>BMP</Text> Become More Productive </Text>
        </Animated.View>

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
    backgroundColor:colors.mainColor,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width/5,
    position:'absolute',
    right:0,
    top:0,
    alignItems:'center',
  },
  textContainer:{

    alignItems:'center',
    justifyContent:'center',
    padding:10,


  },
  doItText:{
    fontSize:25,
    fontWeight:'bold',
    color:'#000'
  },
  secondText:{
    borderRadius:10,
  },
  secondContainer:{
    width:Dimensions.get('window').width/2,
  },
  bmpText:{
    color:'#000',
    fontWeight:'bold'
  }
})
