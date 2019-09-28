import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import ProfileStack from "./ProfileStack";
import CarStack from "./CarStack";
import Splash from "../components/Splash";
const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,
    CarTab: CarStack,
    Splash: { screen: Splash }
    // DetailTab: CarDetail
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName === "CarTab") {
          iconName = "menu";
        }
        return (
          <Icon name={iconName} style={{ color: "white" }} type={iconType} />
        );
      }
    }),
    initialRouteName: "Splash",
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
