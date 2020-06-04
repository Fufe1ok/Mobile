import React,{Component} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default class Getter extends Component{
componentDidMount(){
  axios.get('https://reactnative.dev/movies.json')
  .then(function (response){
   console.warn(response.data.movies);
  })
  }
  render(){
    return (
      <View>
        <Text style={{fontSize:30}}>Some text</Text>
        </View>
    )
  }
}