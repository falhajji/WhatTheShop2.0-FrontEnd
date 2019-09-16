import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/Login";
import Lol from "../components/Lol";
import Profile from "../components/Profile";

const StackNav = createStackNavigator(
  {
    BottomTab: BottomTab,
    Login: Login,
    Lol: Lol
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(8,80,129)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
