import React, { Component } from "react";
import {
  ImageBackground,
  View,
  TextInput,
  Image,
  ScrollView,
  Text
} from "react-native";
import Products from "./Products";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "./common/Header";
import Button from "./common/Button";
import { mainColor } from "./common/Constant";
import { StackActions, NavigationActions } from 'react-navigation';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        style={{
          height: "100%",
          width: "100%",
          flex: 1
          //   justifyContent: "center"
        }}
        source={require("./images/background.jpeg")}
      >
        <Header backButton title="Registration" navigation={this.props.navigation} />
        <ScrollView >
        {/* LOGO */}
        <Image
          source={require("./images/logo.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />

        {/* Email */}
        <TextInput
          style={{
            borderColor: mainColor,
            borderRadius: 7,
            borderWidth: 1,
            marginVertical: 7,
            width: "90%",
            alignSelf: "center",
            color: 'white'
          }}
          placeholder="Email"
          placeholderTextColor="white"
        />

        {/* Password */}
        <TextInput
          style={{
            borderColor: mainColor,
            borderRadius: 7,
            borderWidth: 1,
            marginVertical: 7,
            width: "90%",
            alignSelf: "center",
            color: 'white'
          }}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          
        />

        {/* Confirm Password */}
        <TextInput
          style={{
            borderColor: mainColor,
            borderRadius: 7,
            borderWidth: 1,
            marginVertical: 7,
            width: "90%",
            alignSelf: "center",
            color: 'white'
          }}
          placeholder="Confirm password"
          placeholderTextColor="white"
          secureTextEntry
        />
        
        {/* Registration Button */}
        <Button
          buttonColor={mainColor}
          textColor="white"
          text="Registration"
          onPress={() => {
            this.props.navigation.navigate('Registration');
          }}
        />
        </ScrollView>
      </ImageBackground>
    );
  }
}
