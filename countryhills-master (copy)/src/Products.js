import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
// import { TouchableOpacity , FlatList} from 'react-native-gesture-handler';
import Header from "./common/Header";

export default class Products extends Component {
  render() {
    const { title } = this.props;
    this.params = this.props.navigation.state.params;
    return (
      <ImageBackground
        source={require("./images/background.jpeg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          title="Starters"
          navigation={this.props.navigation}
          backButton
          cartButton
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={[
              {
                title: "Pizza",
                image: require("./images/logo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>FlatList<{ title: string; image: any; description: string; }>",
                price: 69
              },
              {
                title: "Crepe",
                image: require("./images/photo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>",
                price: 89
              },
              {
                title: "Pizza",
                image: require("./images/logo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>FlatList<{ title: string; image: any; description: string; }>",
                price: 69
              },
              {
                title: "Crepe",
                image: require("./images/photo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>",
                price: 89
              },
              {
                title: "Pizza",
                image: require("./images/logo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>FlatList<{ title: string; image: any; description: string; }>",
                price: 69
              },
              {
                title: "Crepe",
                image: require("./images/photo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>",
                price: 89
              },
              {
                title: "Pizza",
                image: require("./images/logo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>FlatList<{ title: string; image: any; description: string; }>",
                price: 69
              },
              {
                title: "Crepe",
                image: require("./images/photo.jpeg"),
                description:
                  "FlatList<{ title: string; image: any; description: string; }>",
                price: 89
              }
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Details")}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginLeft: 10,
                    marginRight: 10
                  }}
                >
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      marginTop: 10,
                      borderRadius: 5
                    }}
                    source={item.image}
                  />
                  <View
                    style={{
                      alignItems: "flex-start",
                      marginLeft: 5,
                      width: "100%",
                      height: "100%",
                      flexShrink: 1
                    }}
                  >
                    <Text
                      style={{ fontSize: 20, color: "white", marginTop: 10 }}
                    >
                      {" "}
                      {item.title}{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "white",
                        textAlign: "auto",
                        width: "90%"
                      }}
                    >
                      {" "}
                      {item.description}{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}
