import React, { Component } from "react";
import {
  ImageBackground,
  View,
  TextInput,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import Products from "./Products";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "./common/Header";
import Button from "./common/Button";
import {mainColor} from './common/Constant'

export default class Promo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        style={{
          height: "100%",
          width: "100%"
        }}
        source={require("./images/background.jpeg")}
      >
        <Header drawerButton cartButton title="Promo codes" navigation={this.props.navigation} />

        <View style={{
            flex: 1,
            justifyContent: 'center'
        }} >
          <TextInput style={{
              borderColor: mainColor,
              borderRadius: 7,
              borderWidth: 1,
              marginVertical: 12,
              width: '90%',
              alignSelf: 'center'

          }}
            placeholder='Enter your code'
            placeholderTextColor='white'
           />
          {/* Submit button */}
          <Button
            buttonColor={mainColor}
            textColor="white"
            text="Add promo"
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    );
  }
}
