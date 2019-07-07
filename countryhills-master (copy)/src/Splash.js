import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class App extends Component {

  componentDidMount() {
    setTimeout(() =>  this.props.navigation.navigate('Login'), 3000)
  }

  state = {
    opacity: new Animated.Value(0)
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      delay: 0
    }).start();
  };

  render() {
    return (
      <ImageBackground
        source={require("./images/background.jpeg")}
        style={styles.container}
      >
        <Animated.Image
          onLoad={this.onLoad}
          source={require("./images/logo.png")}
          style={{
            width: 250,
            height: 250,
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ]
          }}
        />

        <Animated.Image
          onLoad={this.onLoad}
          source={require("./images/cow.png")}
          style={{
            width: 275,
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ]
          }}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
