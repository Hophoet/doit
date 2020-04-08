import React from 'react';
import {View, ActivityIndicator, Text, Image, StyleSheet} from 'react-native';
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component{
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user =>{
      console.log(this.props);
      this.props.navigation.navigate(user?'App':'Auth')
    })
  }
  render(){
    return(
      <View style={styles.container}>
          <Text>Loading....</Text>
          <ActivityIndicator size='large' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
