import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { DrawerActions } from "react-navigation-drawer";
import { mainColor } from "./Constant";
import { thisTypeAnnotation } from "@babel/types";

export default class DrawerView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderButton(text, onPress) {
    return (
      <TouchableOpacity
        style={{
          // width: "100%",
          padding: 7,
          marginHorizontal: 7,
          justifyContent: "center",
          alignItems: "flex-start",
          borderBottomColor: "lightgrey",
          borderBottomWidth: 0.25
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          flex: 1
        }}
        source={require("../images/background.jpeg")}
      >
        <TouchableOpacity style={{
          position: 'absolute',
          right: 1,
          top: 1,
          padding: 7
        }} >
          <MaterialIcons name="close" size={50} color="white"  />
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            backgroundColor: mainColor
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              borderRadius: 50,
              width: 100,
              height: 100,
              margin: 15
            }}
          >
            <Image
              style={{
                flex: 1,
                borderRadius: 50,
                width: 100,
                height: 100
              }}
              source={require("../images/photo.jpeg")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flex: 1
          }}
        >
          {this.renderButton("Products", () => {
            this.props.navigation.navigate("MainMenu");
            this.props.navigation.dispatch(DrawerActions.closeDrawer());
          })}
          {this.renderButton("Offers", () => {
            this.props.navigation.navigate("Promo");
            this.props.navigation.dispatch(DrawerActions.closeDrawer());
          })}
          {this.renderButton("Promo codes", () => {})}
          {this.renderButton("Log out", () => {})}
        </View>
        <View style={{
          margin: 15  
        }} >
          <Text style={{
            color: 'white',
          }} >
            Developed by
          </Text>

          <Text style={{
            color: mainColor,
          }} >
            www.codxy.com
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
