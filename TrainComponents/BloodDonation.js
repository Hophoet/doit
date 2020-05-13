import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions,
        FlatList} from 'react-native'

export default class BloodDonation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bloods:[
        {id:4, type:'O+', donator:'Ronald Dixon', info:'24 * Male *28km *12hrs'},
        {id:1, type:'A-', donator:'Kathy Bates', info:'19 * Female *10km *22hrs'},
        {id:8, type:'AB+', donator:'Edward Sanders', info:'6 * Male *15.3km *24hrs'},
      ]
    }
  }

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <View style={styles.blockTextContainer}>
          <Text style={styles.blockText}>Blood Requests</Text>
          </View>
          <View style={styles.block}>
            <View style={styles.first}>
              <View style={styles.textBox}>
                <Text style={styles.bigText}>291</Text>
                <Text style={styles.smallText}>-12%</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.smallText}>+45%</Text>
                <Text style={styles.bigText}>481</Text>
              </View>
            </View>
            <View style={styles.second}>
              <Text style={styles.secondText}>Available</Text>
              <Text style={styles.secondText}>Requests</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyFirstContainer}>
            <Text style={styles.bodeyFirstContainerFirstText}>Recent updates</Text>
            <Text style={styles.bodeyFirstContainerSecondText}>View All</Text>
          </View>
          <View style={styles.bloodsFlatContainer}>
            <FlatList
              data={this.state.bloods}
              renderItem={({item, index}) => <BloodItems item={item}/>}
              keyExtrator = {(item)=> String(item.id)}
            />
          </View>
        </View>

      </View>
    )
  }
}

//blood item stateless component
const BloodItems = (props) => (
  <View style={styles.bloodItemContainer}>
    <View style={styles.bloodTypeBox}>
      <View style={styles.bloodUrgentContainer}>
        <Text style={styles.bloodUrgentText}>urgent</Text>
      </View>
      <View style={styles.bloodTypeContainer}>
        <Text style={styles.bloodTypeText}>{props.item.type}</Text>
      </View>
    </View>
    <View style={styles.bloodInfoBox}>
      <Text style={styles.bloodDonatorText}>{props.item.donator}</Text>
      <Text style={styles.bloodDonatorInfo}>{props.item.info}</Text>
    </View>

  </View>
)

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F72B2B',
    paddingBottom:Dimensions.get('window').height/15,
    paddingTop:20,
  },
  header:{
    flex:2,
    justifyContent:'center',

  },
  body:{
    flex:5,
    backgroundColor:'#FFFFFFFF',
    paddingTop:60,
    paddingHorizontal:10
  },
  block:{
    backgroundColor:'white',
    flex:1,
    marginHorizontal:15,
    borderRadius:10,
    marginBottom:-50,
    elevation:5,
    justifyContent:'center',
    paddingHorizontal:40
  },
  blockTextContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:.5
  },
  blockText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  first:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textBox:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  bigText:{
    color:'black',
    fontWeight:'bold',
    fontSize:30
  },
  smallText:{
    color:'#F72B2B',
    fontWeight:'bold',
    margin:10
  },
  second:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  secondText:{
    color:'gray',

  },
  bodyFirstContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  bodeyFirstContainerFirstText:{
    color:'gray'
  },
  bloodItemContainer:{
    elevation:6,
    margin:10,
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
    flexDirection:'row',
    alignItems:'center'

  },
  bloodTypeBox:{
    backgroundColor:'#000000',
    borderRadius:6,
    height:80,
    width:65,
  },
  bloodUrgentContainer:{
    backgroundColor:'#F72B2BAA',
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:6,
    borderTopLeftRadius:6,

  },
  bloodUrgentText:{
    color:'#FFFFFFFF'
  },
  bloodTypeContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bloodTypeText:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  bloodInfoBox:{
    marginLeft:30
  },
  bloodDonatorText:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:5
  },
  bloodDonatorInfo:{
    color:'gray'
  }

})
