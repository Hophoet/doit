import React from 'react'
import {connect} from 'react-redux'
import {ActivityIndicator, View, Text, FlatList, Button, StyleSheet, Modal, TouchableOpacity, Dimensions, Animated} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import DoitList from './DoitList'
import AddDoitList from './AddDoitList'




//the Home class
class Home extends React.Component{
  //constructor of the Home class
  constructor(props){
    super(props);

    this.database = require('../database/data.json').doits
    // this.doits = this.props.doits
    //set of the state of the modal state
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      addDoitListVisible:false,
      addItemTitle:'',
      xTools: new Animated.Value(this.width/2),
      deletedDoitKey:'',
      newTask:''
    }



  }



  refresh = () => {
    this.setState({newTask:''})
  }
  refreshFlat = (key) =>{
    this.setState({ deletedDoitKey: key})
  }

  componentDidMount(){
    //this.props.navigation.setParams({onSave:this._onAlert.bind(this), isSaving:false});

    Animated.spring(
      this.state.xTools,
      {
        toValue:this.width - Dimensions.get('window').width/3 + 20,
        speed:1,
        bounciness:10
      }
    ).start();
  }
  //the Doit List modal close and open method
  closeList = () => {
    this.setState({addDoitListVisible:!this.state.addDoitListVisible})
  }

  _emptyCase = (data) => {
    if(data.length === 0){
      //md-list-box
      return (
        <View style={{ opacity:.4, justifyContent:'center', alignItems:'center', top:this.height/5}}>
          <Text>ADD A NEW DO IT LIST </Text>
          <Ionicons  name='ios-paper' size={24} style={{padding:5}}/>
        </View>
      )
    }
  }

  _onAlert(){
    if(this.props.navigation.state.params.isSaving == true){
      return;
    }
    this.props.navigation.setParams({isSaving:true});
    setInterval(()=>{
      console.log('ALERT');
      this.props.navigation.setParams({isSaving:false});
    }, 3000)

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
          styleType='slide'
          visible={this.state.addDoitListVisible}
          >
          <AddDoitList database={this.database} closeModal = {() => this.closeList()}/>
        </Modal>


        <View style={styles.design}/>

        <View style={styles.textContainer}>
          <Text onPress={()=> { this.addTask()}}>Just do it</Text>

        </View>

        <View style={styles.doitList}>
          {this._emptyCase(this.database)}
          <View style={styles.flatsTitleContainer}>
            <Text style={styles.flatsTitle}></Text>
          </View>
          <FlatList
            data={this.database}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

            renderItem={({item}) => (
              <DoitList  doit={item} database={this.database} refresh={this.refreshFlat} />
                    ) }/>
          </View>

          <Animated.View style={[styles.toolsContainer, {left:this.state.xTools}]}>
            <TouchableOpacity
              style={styles.addDoit}
              onPress={this.closeList}
              >
              <AntDesign name='plus' size={25} color='#1FA9FF' />
            </TouchableOpacity>
          </Animated.View>

        </View>
      )
  }
}

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
    backgroundColor:'#1FA9FF',
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
    borderWidth:1,
    padding:5,
    borderColor:'#1FA9FF',
    borderColor:'white'
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


  },
  flatsTitle:{
    fontSize:17,
    opacity:.3,
    textTransform:'capitalize'

  },
  flatsTitleContainer:{
    marginLeft:10
  }
})
