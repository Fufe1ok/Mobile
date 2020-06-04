import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Profile extends Component {
render() {
return (
  <View>
    <View style={styles.header}></View>
    <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
    <View style={styles.body}>
    <View style={styles.bodyItems}> 
      <Text style={styles.name}> Yura Paneiko</Text>
      <Text>Student</Text>
      </View>  
    </View>
  </View>
)
}
}
const styles = StyleSheet.create({
  body:{
    marginTop:40,
  },
  bodyItems:{
    flex:1,
    alignItems: 'center',
    padding:30
  },
  name:{
    fontSize:22,
    //color:"#FFFFFF",
  },
  header:{
    height:200,
    backgroundColor: "#00BFFF",
  },
  avatar:{
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
    //paddingBottom:50,
    //marginBottom:140
  },
});