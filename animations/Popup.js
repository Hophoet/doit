import React from 'react'
import {StyleSheet, View, Text, Animated, Dimensions} from 'react-native'


class Popup extends React.Component{
  state ={
    popupOpacity:new Animated.Value(0)
  }
  //componentDidMount
  componentDidMount(){
    Animated.timing( this.state.popupOpacity,{
      toValue:.9,
      duration:2000
    }).start(()=>{
      Animated.timing(this.state.popupOpacity,{
        toValue:0,
        duration:2000
      }).start()
    })
  }

  //render
  render(){
    return (
      <Animated.View style={[styles.container,{opacity:this.state.popupOpacity}]}>
        <Text numberOfLines={1} style={styles.text}>network not available for the props var</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    backgroundColor:'#000',
    elevation:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    padding:7,
    borderRadius:6,
    width:Dimensions.get('window').width/2,

  },
  text:{
    color:'#fff',

  }
})

export {Popup}
