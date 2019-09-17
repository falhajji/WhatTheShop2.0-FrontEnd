import { createStackNavigator } from "react-navigation-stack";

// Components
// import CarDetail from "../components/CarDetail";
import CarList from "../components/CarList";

const ProfileStack = createStackNavigator(
  {
    Carlist: CarList
    // Cardetail: CarDetail
  },
  {
    initialRouteName: "Carlist",
    defaultNavigationOptions: {
      title: "Car Shop"
    }
  }
);

export default ProfileStack;
