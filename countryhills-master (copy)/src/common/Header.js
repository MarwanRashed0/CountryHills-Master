import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { DrawerActions } from "react-navigation-drawer";
import {mainColor} from './Constant'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, drawerButton, backButton, cartButton } = this.props;
    return (
      <View
        style={{
          backgroundColor: mainColor,
          flexDirection: "row",
          width: "100%",
          //   height: 60,
          //   justifyContent: "space-between",
          alignItems: "center",
          padding: 12,
          elevation: 7
        }}
      >
        {drawerButton && (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          >
            <MaterialIcons
              name={"menu"}
              size={25}
              color={"white"}
              //   style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        )}

        {backButton && (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <MaterialIcons
              name={"arrow-back"}
              size={25}
              color={"white"}
              //   style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        )}

        <Text
          style={{ color: "white", fontSize: 20, textAlign: "center", flexShrink: 1 }}
        >
          {title}
        </Text>

        {cartButton && (
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end' }}
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            <MaterialIcons
              name={"shopping-cart"}
              size={25}
              color={"white"}
              // style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        )}
        {!cartButton && <View style={{ flex: 1 }} />}
      </View>
    );
  }
}
