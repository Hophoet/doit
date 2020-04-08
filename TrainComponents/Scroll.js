import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

export default class Scroll extends React.Component{
  state = {
    message:null
  }
  render(){
    return (
      <ScrollView
      horizontal={true}
      onMomentumScrollEnd ={ () =>{this.setState({message:'page onpened'})}}
      pagingEnabled={true}>
        <View style = {[styles.screen, {backgroundColor:'red'}]}><Text style={{color:'white'}}>
        something
 {this.state.message}</Text></View>
        <View style={[styles.screen, {backgroundColor:'blue'}]}><Text>Screen 2 {this.state.message}</Text></View>
        <View style={[styles.screen, {backgroundColor:'yellow'}]}><Text>Screen 3 {this.state.message}</Text></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen:{
    marginTop:20,
    flex:1,
    width:Dimensions.get('window').width,
    justifyContent:'center',
    alignItems:'center'
  }
})
