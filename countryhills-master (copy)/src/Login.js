import React, { Component } from "react";
import {
  ImageBackground,
  View,
  TextInput,
  Image,
  StyleSheet,
  Text
} from "react-native";
import Products from "./Products";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "./common/Header";
import Button from "./common/Button";
import { mainColor } from "./common/Constant";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackActions, NavigationActions } from 'react-navigation';

export default class Login extends Component {
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
        {/* LOGO */}
        <Image
          source={require("./images/logo.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />

        {/* Username */}
        <TextInput
          style={{
            borderColor: mainColor,
            borderRadius: 7,
            borderWidth: 1,
            marginVertical: 12,
            width: "90%",
            alignSelf: "center",
            color: 'white'
          }}
          placeholder="Username"
          placeholderTextColor="white"
        />

        {/* Password */}
        <TextInput
          style={{
            borderColor: mainColor,
            borderRadius: 7,
            borderWidth: 1,
            marginVertical: 12,
            width: "90%",
            alignSelf: "center",
            color: 'white'
          }}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="white"
        />

        {/* Forget pass */}
        <TouchableOpacity
          style={{
            padding: 5,
            alignSelf: "flex-end",
            marginRight: 15,
            marginBottom: 15
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Reset your password
          </Text>
        </TouchableOpacity>

        {/* Login button */}
        <Button
          buttonColor="white"
          textColor={mainColor}
          text="Login"
          onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "MainNav" })]
            });
            this.props.navigation.dispatch(resetAction);
          }}
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
      </ImageBackground>
    );
  }
}
