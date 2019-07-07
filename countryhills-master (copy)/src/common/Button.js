import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text
} from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: this.props.buttonColor,
          height: 45,
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginBottom: 12
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            textAlign: "center",
            color: this.props.textColor,
            margin: 20
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
