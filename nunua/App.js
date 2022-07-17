import React, { Component } from 'react';
import { Text, View } from 'react-native';

class NunuaApp extends Component {
constructor(props){

  this.state={
    value : 0,
  }
}

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default NunuaApp;