import React from 'react'
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native'
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'
import colors from '../constants/Colors'

//Enter show screen class
export default class Enter extends React.Component{
  constructor(props){
    super(props)
    //screen dimensions
    this.width = Dimensions.get('window').width
    this.height = Dimensions.get('window').height
    this.state = {
      yIcon: new Animated.Value(this.width/3)
    }

  }
  //Component dit mount method redefinition
  componentDidMount(){
    //set of the time to log the the App screen
      setTimeout(
        () => {this.props.navigation.navigate('App')}
     , 5000)
    Animated.spring(
      this.state.yIcon,
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
    return(
      <View style={styles.container}>
        <View style={styles.design}/>

        <Animated.View style={[styles.main, {top: this.state.yIcon }]}>
          <View style={styles.textContainer}>
            <Text style={styles.firstText}>Doit</Text>
          </View>
        </Animated.View>

        <View>
          <Text style={styles.bmpText}><Text>BMP</Text> Become More Productive </Text>
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
    padding:5,
    borderStartWidth:3,
    borderColor:colors.mainColor,
    padding:10,
    borderRadius:60,
    marginBottom:10

  },
  firstText:{
    fontSize:25,
    fontWeight:'bold',
  },
  secondText:{
    borderRadius:10
  },
  main:{
    alignItems:'center'
  },
  bmpText:{
    color:'gray'
  }
})
