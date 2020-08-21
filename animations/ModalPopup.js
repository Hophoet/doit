import React from 'react'
import {StyleSheet, View, Text, Animated, Dimensions, Modal} from 'react-native'
import {Popup} from './Popup'

class ModalPopup extends React.Component{
  state ={

  }
  //componentDidMount
  componentDidMount(){

  }

  //render
  render(){
    return (
      <Modal
        visible={true}
        transparent={true}
        >
      
        <Popup/>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    backgroundColor:'#000',
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

export {ModalPopup}
