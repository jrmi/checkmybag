import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import BagListScreen from "../screens/BagListScreen";
import HomeScreen from "../screens/HomeScreen";

const NavSwitch = createSwitchNavigator(
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


const AppNavigator = createAppContainer(NavSwitch)

export default AppNavigator
