import { createStackNavigator } from "react-navigation-stack";

// Components
import CarDetail from "../components/CarDetail";
import CarList from "../components/CarList";
import BottomTab from "./BottomTab";

const ProfileStack = createStackNavigator(
  {
    Carlist: CarList,
    Cardetail: CarDetail,
    CoffeeCart: CoffeeCart,
    BottomTab: BottomTab
  },
  {
    initialRouteName: "Carlist",
    defaultNavigationOptions: {
      title: "Car Shop"
    }
  }
);

export default ProfileStack;
