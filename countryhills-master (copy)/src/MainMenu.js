import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { DrawerActions } from 'react-navigation-drawer';
import Products from "./Products";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const { width, height } = Dimensions.get("window");


// export default class MainMenu extends Component {

//     render() {
//         return (
//             <ImageBackground source={require("./images/background.jpeg")}
//                 style={{ width: '100%', height: '100%' }}>
//                 <View style={{ width: '100%', flex: 1 }}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <Image style={{ height: 200, width: 200 }} source={require('./images/logo.png')} />
//                     </View>
//                     <FlatList style={{ paddingBottom: 100, }}
//                         data={[{ title: 'Breakfast' },
//                         { title: 'Starters' },
//                         { title: 'Chicken Specialties' },
//                         { title: 'Salads' },
//                         { title: 'Soup' },
//                         { title: 'Burger' },
//                         { title: 'Drinks' }]}
//                         renderItem={({ item }) =>
//                             <TouchableOpacity onPress={() => this.props.navigation.navigate('Products', { title: item.title })}>
//                                 <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}>
//                                     <Image style={{ width: 90, height: 90, marginTop: 10, marginLeft: 10, borderRadius: 5 }}
//                                         source={require('./images/photo.jpeg')} />
//                                     <Text style={{ color: 'white', fontSize: 25 }}> {item.title} </Text>
//                                 </View>
//                             </TouchableOpacity>
//                         }
//                     />
//                 </View>https://www.facebook.com/
//             </ImageBackground>
//         );
//     }
// }

export default class MainMenu extends Component {
  render() {
    return (
      <ImageBackground
        style={{
          height: "100%",
          backgroundColor: "transparent",
          width: "100%"
        }}
        source={require("./images/background.jpeg")}
      >

        <TouchableOpacity 
          style={{
            position: 'absolute',
            left: 1,
            top: 1,
          }}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        >
          <MaterialIcons name="menu" size={25} color="white" style={{ margin: 7 }} />
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Image
                source={require("./images/photo.jpeg")}
                style={{
                  backgroundColor: "white",
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginTop: 140
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Image
                source={require("./images/4.jpeg")}
                style={{
                  backgroundColor: "white",
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginTop: 80
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Image
                source={require("./images/2.jpeg")}
                style={{
                  backgroundColor: "white",
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginTop: 140
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image
              source={require("./images/logo.png")}
              style={{ width: 300, height: 300 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Image
                source={require("./images/2.jpeg")}
                style={{
                  backgroundColor: "white",
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginBottom: 140
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Image
                source={require("./images/1.jpeg")}
                style={{
                  backgroundColor: "white",
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginTop: 50
                }}
              />
              {/* <View style={{ backgroundColor: 'white', width: 80, height: 80, borderRadius: 40, marginTop: 50 }} /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Products")}
            >
              <Image
                source={require("./images/1.jpeg")}
                style={{
                  backgroundColor: "white",
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginBottom: 140
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%"
  },
});
