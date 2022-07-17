import React, { Component } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

class NunuaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  subtract = () => {
    let initialValue = this.state.value;
    this.setState({
      value: initialValue-1,
    });
  };

  add = () => {
    let initialValue = this.state.value;
    this.setState({
      value: initialValue + 1,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>{this.state.value}</Text>

        <TouchableOpacity
          onPress={this.subtract}
          style={{
            backgroundColor: "red",
            padding: 10,
            margin: 10,
            height: 50,
            width: 100,
          }}>
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.add}
          style={{
            backgroundColor: "red",
            padding: 10,
            margin: 10,
            height: 50,
            width: 100,
          }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NunuaApp;
