import { createStackNavigator } from "react-navigation-stack";

// Components
import CarDetail from "../components/CarDetail";
import CarList from "../components/CarList";
import CarCart from "../components/CarCart";

const CarStack = createStackNavigator(
  {
    CarList: CarList,
    CarDetail: CarDetail,
    CarCart: CarCart
  },
  {
    initialRouteName: "CarList",
    defaultNavigationOptions: {
      title: "Car Shop"
    }
  }
);

export default CarStack;
