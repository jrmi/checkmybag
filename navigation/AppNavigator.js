import React from "react";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

import BagListScreen from "../screens/BagListScreen";
import HomeScreen from "../screens/HomeScreen";

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Bag: BagListScreen,
    Main: HomeScreen
  },

  {
    initialRouteName: "Main"
  }
);
