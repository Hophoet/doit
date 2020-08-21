import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Animated} from 'react-native'
import colors from '../constants/Colors'


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

  //Component dit mount method redefinition
  componentDidMount(){


    //set of splash timer
      setTimeout(
        () => {
           // this.props.navigation.navigate('App')
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
     this.props.navigation.navigate('App')
    })


  }
  //Enter components render method
  render(){
    //animation initial position

    return(
      <View style={styles.container}>
       
          <View style={styles.centerTextContainer}>
            <View style={styles.textContainer}>
              <Image style={styles.icon} source={require('../assets/icon.png')}/>
             
            </View>
            <Animated.View style={[styles.secondContainer, {   left:this.state.LeftText }]}>
              <Text style={styles.secondText}>Become More Productive </Text>
            </Animated.View>
          </View>
      </View>
    )
  }

}

//set of the styles with StyleSheet
const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'

  },
  centerTextContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
  ,
  textContainer:{
    justifyContent:'center',

  },
  doItText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#000'
  },
  secondText:{

  },
  secondContainer:{

  },
  bmpText:{
    color:'#000',
    fontWeight:'bold'
  },
  icon:{
    width:Dimensions.get('window').width/3,
    height:Dimensions.get('window').width/3
  }
})
