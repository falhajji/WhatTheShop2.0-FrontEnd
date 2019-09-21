import { createStackNavigator } from "react-navigation-stack";

// Components
import CarDetail from "../components/CarDetail";
import CarList from "../components/CarList";
import CarCart from "../components/CarCart";

const ProfileStack = createStackNavigator(
  {
    Carlist: CarList,
    Cardetail: CarDetail,
    CarCart: CarCart
  },
  {
    initialRouteName: "Carlist",
    defaultNavigationOptions: {
      title: "Car Shop"
    }
  }
);

export default ProfileStack;
