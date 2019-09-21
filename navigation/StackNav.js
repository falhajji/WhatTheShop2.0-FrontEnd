import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/Login";
import CarList from "../components/CarList";
import BottomTab from "./BottomTab";
import CarDetail from "../components/CarDetail";
// import CartButton from "../../CarButton";

const StackNav = createStackNavigator(
  {
    BottomTab: BottomTab,
    Login: Login
  },
  {
    initialRouteName: "BottomTab",
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
