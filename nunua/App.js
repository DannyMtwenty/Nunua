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
    if (initialValue > 0) {
      this.setState({
        value: initialValue - 1,
      });
    }

    this.setState({
      value: initialValue - 1,
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
      <View  style ={{
        flex: 1,
        alignItems: "center",
justifyContent: "center",
      }}>


        <View
          style={{
            borderColor: "red",

            flexDirection: "row",

            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderWidth: 2,

            backgroundColor: "white",
            marginTop: 20,
          }}>
          <View>
            {this.state.value > 0 ? (
              <TouchableOpacity
                onPress={this.subtract}
                style={{
                  backgroundColor: "green",

                  height: 50,
                  width: 100,
                  alignItems: "center",
                }}>
                <Text style={{
                  color: "white",
                  fontSize: 40,
                }}>-</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          <Text >{this.state.value}</Text>

          <View>
            <TouchableOpacity
              onPress={this.add}
              style={{
                backgroundColor: "green",
              
                justifyContent: "center",
                alignItems: "center",

                height: 50,
                width: 100,
                
              }}>
              <Text style={{
                color: "white",
                fontSize: 40
              }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.state.value >= 10 ? (
          <Text>HEY WE REACHDED LEVEL {this.state.value}</Text>
        ) : null}
      </View>
    );
  }
}

export default NunuaApp;
