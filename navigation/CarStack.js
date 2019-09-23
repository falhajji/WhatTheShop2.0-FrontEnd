import { createStackNavigator } from "react-navigation-stack";

// Components
import CarDetail from "../components/CarDetail";
import CarList from "../components/CarList";
import CarCart from "../components/CarCart";
import Login from "../components/Login";

const CarStack = createStackNavigator(
  {
    Carlist: CarList,
    CarDetail: CarDetail,
    CarCart: CarCart,
    Login: Login
  },
  {
    initialRouteName: "Carlist",
    defaultNavigationOptions: {
      title: "Car Shop"
    }
  }
);

export default CarStack;
