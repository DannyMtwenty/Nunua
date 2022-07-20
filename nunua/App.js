import React, { Component } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

class NunuaApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          borderWidth: 4,
          borderColor: "red",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}>
        <View
          style={{
            flex: 1,
            borderWidth: 4,
            borderColor: "green",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <View
            style={{
              flex: 2,
              borderWidth: 4,
              marginLeft: 10,
              height: 50 + "%",
              borderColor: "blue",
            }}>
            <Text>I</Text>
          </View>

          <View
            style={{
              flex: 8,
              borderWidth: 4,
              borderColor: "yellow",
              marginHorizontal: 10,
              height: 50 + "%",
              justifyContent: "flex-start",
              paddingLeft: 10,
            }}>
            <Text>Search here</Text>
          </View>
        </View>

        <View
          style={{
            flex: 2,
            borderWidth: 4,
            borderColor: "yellow",
            flexDirection: "row",
            width: 100 + "%",
            marginRight: 15,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: 10,
          }}>
          <View
            style={{
              borderWidth: 2,
              backgroundColor: "grey",

              width: 20 + "%",
              height: 50 + "%",

              borderRadius: 15,
              marginRight: 15,
            }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 65 + "%",
                borderColor: "red",
                borderWidth: 2,
              }}>
              <Text>IC</Text>
            </View>

            <View
              style={{
                borderColor: "red",
                justifyContent: "center",
                alignItems: "center",
                height: 35 + "%",
              }}>
              <Text>Groceries</Text>
            </View>

          </View>

          <View
            style={{
              borderWidth: 2,
              backgroundColor: "grey",

              width: 20 + "%",
              height: 50 + "%",

              borderRadius: 15,
              marginRight: 15,
            }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 65 + "%",
                borderColor: "red",
                borderWidth: 2,
              }}>
              <Text>IC</Text>
            </View>

            <View
              style={{
                borderColor: "red",
                justifyContent: "center",
                alignItems: "center",
                height: 35 + "%",
              }}>
              <Text>Repair</Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              backgroundColor: "grey",

              width: 20 + "%",
              height: 50 + "%",

              borderRadius: 15,
              marginRight: 15,
            }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 65 + "%",
                borderColor: "red",
                borderWidth: 2,
              }}>
              <Text>IC</Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",

                height: 35 + "%",

              }}>
              <Text style={{fontSize:10}}>Gas delivery</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 3, borderWidth: 4, borderColor: "green" }}>
          <Text>Box here</Text>
        </View>

        <View style={{ flex: 4, borderWidth: 4, borderColor: "green" }}>
          <Text>Box here</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default NunuaApp;
