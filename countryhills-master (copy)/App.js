/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import MainMenu from './src/MainMenu';
import Products from './src/Products';
import Header from './src/common/Header';
import Details from './src/Details';
import Cart from './src/Cart';
import Splash from './src/Splash';
import Promo from './src/Promo';
import DrawerView from './src/common/DrawerView';
import Login from './src/Login';
import Registration from './src/Registration';



const MainStack = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    MainNav: {
      screen:createDrawerNavigator({
        MainMenu: {screen: MainMenu},
        Promo: {screen: Promo},
      },{
        contentComponent: ({ navigation }) => (
          <DrawerView navigation={navigation} />
        ),

      })       
    },
    Products: {
      screen: Products
    },
    Login: {
      screen: Login
    },
    Registration: {
      screen: Registration
    },
    Header: {
      screen: Header
    },
    Details: {
      screen: Details
    },
    Cart: {
      screen: Cart
    }
  },
  {
    headerMode: "none"
  }
)

export default createAppContainer(MainStack);
