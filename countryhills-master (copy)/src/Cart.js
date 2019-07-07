import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import Entypo from "react-native-vector-icons/FontAwesome";
import Button from './common/Button'
import Header from "./common/Header";
import {mainColor} from './common/Constant'

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [
        {
          name: "soda",
          quantity: 2,
          price: 10,
          image: require("./images/1.jpeg"),
          id: 1
        },
        {
          name: "cola",
          quantity: 1,
          price: 10,
          image: require("./images/2.jpeg"),
          id: 2
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("./images/1.jpeg"),
          id: 3
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("./images/4.jpeg"),
          id: 4
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("./images/2.jpeg"),
          id: 5
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("./images/1.jpeg"),
          id: 6
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("./images/background.jpeg"),
          id: 7
        }
      ]
    };
  }

  _renderRequestesItem = ({ item }) => (
    <View
      style={{
        alignItems: "center",
        width: width - 40,
        alignSelf: "center",
        marginBottom: 10,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          alignItems: "center",
          flex: 1,
          alignSelf: "center",
          padding: 10,
          borderRadius: 7,
          backgroundColor: "#ffffff",
          borderStyle: "solid",
          borderWidth: 0.5,
          borderColor: "#e4e4e4",
          flexDirection: "row"
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image style={styles.imageStyle} source={item.image} />
          <View style={{ marginLeft: 10, alignSelf: "center" }}>
            <Text style={styles.medicineName}>{item.name}</Text>
            <Text style={styles.medicinePrice}>{item.price} EGP</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                {
                  width: 20,
                  height: 20,
                  backgroundColor: mainColor,
                  borderRadius: 10,
                  marginHorizontal: 5,
                  alignItems: "center",
                  justifyContent: "center"
                },
                { backgroundColor: item.quantity === 1 ? "grey" : mainColor }
              ]}
              disabled={item.quantity === 1}
              onPress={() => {}}
            >
              {/* <Image
                style={{ width: 15, height: 15, tintColor: "white" }}
                source={require("./images/minus.png")}
              /> */}
              <Entypo name="minus" size={15} color="white" />
            </TouchableOpacity>
            <Text style={{ width: 40, textAlign: "center" }}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                // const { cartData } = this.state;
                // cartData[2].quantity =5;
                // this.setState({ cartData });
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: "white",
                borderRadius: 10,
                marginHorizontal: 5,
                alignItems: "center",
                justifyContent: "center",
                borderColor: mainColor,
                borderWidth: 1
              }}
            >
              {/* <Image
                style={{ width: 20, height: 20, tintColor: mainColor }}
                source={require("./images/plus.png")}
              /> */}
              <Entypo name={"plus"} color={mainColor} size={15}   />
            </TouchableOpacity>
          </View>
          <Text style={{ alignSelf: "center" }}>quantity</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          backgroundColor: mainColor,
          borderRadius: 10,
          marginLeft: 10,
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={() => {}}
      >
        <Image
          style={{ width: 20, height: 15, tintColor: "white" }}
          source={require("./images/x.png")}
        />
        {/* <Entypo name={"delete"} color={'white'} size={15}   /> */}
      </TouchableOpacity>
    </View>
  );

  _renderOrdersList() {
    const { cartData } = this.state;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
          style={{
            paddingVertical: 10,
            alignSelf: "center",
            borderRadius: 8
          }}
          data={cartData}
          keyExtractor={item => `${item.id}`}
          renderItem={this._renderRequestesItem}
        />
        <View
          style={{
            height: 0.5,
            marginBottom: 10,
            width: width - 60,
            backgroundColor: "#e4e4e4",
            marginHorizontal: 10
          }}
        />
        <View
          style={{
            height: 30,
            marginBottom: 7,
            width: width - 60,
            flexDirection: "row",
            marginHorizontal: 10
          }}
        >
          {/* <TouchableOpacity
            // onPress={this.addProducts}
            style={{ flex: 1, alignItems: "flex-start" }}
          >*/}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              fontStyle: "normal",
              lineHeight: 30,
              letterSpacing: 0,
              textAlign: "center",
              color: "#08aeea"
            }}
          >
            Total:
          </Text>
          {/* </TouchableOpacity> */}
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flexDirection: "row"
            }}
          >
            <Text
              style={[
                {
                  fontSize: 14,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  lineHeight: 30,
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#9397b8"
                },
                { color: "white", alignSelf: "flex-end" }
              ]}
            >
              123 EGP
            </Text>
            {/* <Text
              style={[
                {
                  fontSize: 14,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  lineHeight: 30,
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#9397b8"
                },
                { alignSelf: "flex-end", marginHorizontal: 8 }
              ]}
            >
              Orders
            </Text> */}
          </View>
        </View>
      </View>
    );
  }

  _renderOrdesView() {
    const { cartData } = this.state;
    if (cartData.length > 0) {
      return this._renderOrdersList();
    } else {
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              margin: 10,
              fontSize: 18,
              textAlign: "center",
              color: "white"
            }}
          >
            There are no product added
          </Text>
        </View>
      );
    }
  }

  render() {
    const { cartData } = this.state;
    return (
      <ImageBackground
        source={require("./images/background.jpeg")}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
         <Header
          title="Cart"
          navigation={this.props.navigation}
          backButton
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {this._renderOrdesView()}
          </View>
          <View
            style={{
              // height:'20%',
              width: "100%"
            }}
          >

            <Button buttonColor='white' textColor={mainColor} text='Add Products' onPress={() => {
                this.props.navigation.navigate("MainMenu");
              }} />

            {cartData.length != 0 && (
              <Button buttonColor={mainColor} textColor='white' text='Finish order' onPress={() => {
                  this.setState({ cartData: [] });
                }} />
            )}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50
  },
  medicineName: {
    width: width * 0.35
  }
});
