import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import ProfileStack from "./ProfileStack";
import CarStack from "./CarStack";
import Splash from "../components/Splash";
const BottomTab = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Cars: CarStack,
    Home: { screen: Splash }
    // DetailTab: CarDetail
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === "Profile") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName === "Cars") {
          iconName = "car";
        } else if (routeName === "Home") {
          iconName = "home";
          conType = "FontAwesome";
        }
        return (
          <Icon name={iconName} style={{ color: "white" }} type={iconType} />
        );
      }
    }),
    initialRouteName: "Home",
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "white",
      inactiveTintColor: "white",
      style: {
        backgroundColor: "#0f0a3c"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
