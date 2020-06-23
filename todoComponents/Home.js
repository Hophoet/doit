import React from 'react'
import {connect} from 'react-redux'
import {View, Text, FlatList, StyleSheet, Image,
  Modal, TouchableOpacity, Dimensions, Animated, Button} from 'react-native'

import {AntDesign, Ionicons, Entypo,} from '@expo/vector-icons'
import DoitList from './DoitList'
import AddDoitList from './AddDoitList'
import colors from '../constants/Colors'
import  {ModalPopup} from '../animations/ModalPopup'

//the Home class
class Home extends React.Component{
  //constructor of the Home class
  constructor(props){
    super(props);


    //this.database = require('../database/data.json').doits
    //this.doits = this.props.doits
    //set of the state of the modal state
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      addDoitListVisible:false,
      addItemTitle:'',
      xTools: new Animated.Value(this.width/2),

    }



  }

  _showEmptyImage = ()=> {
    if(this.props.doits.length == 0){
      return (
        <Image style={styles.emptyImage} source={require('../assets/images/emptyTask.png')}/>
      )
    }
  }

  componentDidMount(){
    //this.props.navigation.setParams({onSave:this._onAlert.bind(this), isSaving:false});
    // get of the currentUser info

    Animated.spring(
      this.state.xTools,
      {
        toValue:this.width - Dimensions.get('window').width/3 ,
        speed:1,
        bounciness:10
      }
    ).start();
  }
  //the Doit List modal close and open method
  closeList = () => {
    this.setState({addDoitListVisible:!this.state.addDoitListVisible})
  }


  //set of the navigation title
  static navigationOptions = ({navigation}) => {
    const {params = {} } = navigation.state;
    let headerTitle = 'Doit ';
    let headerTitleStyle =  { color: 'black'};
    let headerStyle = { backgroundColor:'darkviolet'};
    let headerTinColor = '';
    //let headerTitleStyle = {};

    let headerRight = (

      <Button title='alert' onPress={()=>{params.onSave()}} color='darkviolet' />);
    return { headerTitle, headerTitleStyle}
  }




  //the component render method
  render(){

    //let main = (this.props.navigation.state.params && this.props.navigation.state.params.isSaving == true)? <ActivityIndicator/>:
    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          animated={true}
          visible={this.state.addDoitListVisible}
          >
          <AddDoitList dispatch={this.props.dispatch}  doits={this.props.doits} closeModal={() => this.closeList()}/>
        </Modal>


        <View style={styles.design}/>

        <View style={styles.textContainer}>
          {this._showEmptyImage()}
        </View>

        <View style={styles.doitList}>
          <View style={styles.flatsTitleContainer}>
            <Text style={styles.flatsTitle}></Text>
          </View>
          <FlatList
            data={this.props.doits}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

            renderItem={({item}) => (
              <DoitList dispatch={this.props.dispatch}  doit={item} doits={this.props.doits}   />
                    ) }/>
          </View>

          <Animated.View style={[styles.toolsContainer, {left:this.state.xTools}]}>
            <TouchableOpacity
              style={styles.addDoit}
              onPressOut={this.closeList}
              >
              <AntDesign name='plus' size={25} color={colors.mainColor} />
            </TouchableOpacity>
            <Text style={styles.doitsCounter}>{this.props.doits.length}</Text>
          </Animated.View>

        </View>
      )
  }
}
//maps with the state global
const mapDispatchToProps = (dispatch) =>  {
  return {
    dispatch: (action) => { dispatch(action)}
  }
}
const mapStateToProps = (state) => {
  return {
    doits:state.doits
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
//set of the styles with StyleSheet
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
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
  clockIcon:{
    margin:10
  },
  textContainer:{
    alignItems:'center'
  },
  addDoit:{
    justifyContent:'center',
    alignItems:'center',

    marginRight:5,
    padding:5,


  },
  doitList:{
    marginTop:30,
    marginRight:Dimensions.get('window').width/5,

  },
  toolsContainer:{
    flexDirection:'row',
    marginTop:10,
    backgroundColor:'white',
    paddingVertical:10,
    elevation:20,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    width:Dimensions.get('window').width/2,
    alignItems:'center'


  },
  flatsTitle:{
    fontSize:17,
    opacity:.3,
    textTransform:'capitalize'

  },
  flatsTitleContainer:{
    marginLeft:10
  },
  doitsCounter:{
    fontSize:20,
    opacity:.4,
    color:'#000'
  },
  emptyImage:{
    width:Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/2
  }
})
