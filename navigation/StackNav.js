import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/Login";
import CarList from "../components/CarList";
import BottomTab from "./BottomTab";
import CarDetail from "../components/CarDetail";

const StackNav = createStackNavigator(
  {
    BottomTab: BottomTab,
    Login: Login,
    CarDetail: CarDetail
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
