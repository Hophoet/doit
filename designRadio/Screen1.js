import React from 'react';
import {View, Text, Image, StyleSheet, SaveAreaView} from 'react-native';

export default class Screen1 extends React.Component{
  render(){
    return(

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text>Header</Text>
        </View>
        <View style={styles.absoluteContainer}>
          <Text>Absolute view</Text>
        </View>
        <View style={styles.footerContainer}>
          <Text>Footer</Text>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:2
  },
  headerContainer:{
    flex:2,
    backgroundColor:'#F889E5'
  },
  absoluteContainer:{
    backgroundColor:'#f0f7f4',
    elevation:20,
    width:70,
    position:'absolute'
  },
  footerContainer:{
    backgroundColor:'#f44577',
    flex:4
  }

})
