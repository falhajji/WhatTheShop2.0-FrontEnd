import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/Login";
import BottomTab from "./BottomTab";
import Signup from "../components/Signup";
import Splash from "../components/Splash";
const StackNav = createStackNavigator(
  {
    Signup: Signup,
    BottomTab: BottomTab,
    Profile: Profile,
    Login: Login,
    Signup: Signup,
    Splash: Splash
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(8,80,129)"
      },
      headerTextStyle: {}
    }
  }
);

export default StackNav;
