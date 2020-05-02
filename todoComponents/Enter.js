import React from 'react'
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native'
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons'

//Enter show screen class
export default class Enter extends React.Component{
  constructor(props){
    super(props)
    //screen dimensions
    this.width = Dimensions.get('window').width
    this.height = Dimensions.get('window').height
    this.state = {
      yIcon: new Animated.Value(0)
    }

  }
  //Component dit mount method redefinition
  componentDidMount(){
    //set of the time to log the the App screen
      setTimeout(
        () => {this.props.navigation.navigate('App')}
     , 3000)
    // Animated.spring(
    //   this.state.yIcon,
    //   {
    //     toValue:this.height/2,
    //     speed:2,
    //     bounciness:5
    //   }
    // ).start(()=>{
    //   this.props.navigation.navigate('App')
    // })


  }
  //Enter components render method
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.design}/>

        <Animated.View style={[styles.main, {top: this.state.yIcon }]}>
          <Entypo style={[styles.clockIcon]} name='list' size={70} color='#1FA9FF'/>
          <View style={styles.textContainer}>
            <Text style={styles.firstText}>Doit</Text>
            <Text>Just do it </Text>
          </View>
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
    backgroundColor:'#1FA9FF',
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width/5,
    position:'absolute',
    right:0,
    top:0,
    alignItems:'center',
  },
  textContainer:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',



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
  }
})
