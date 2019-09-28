import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";
import OrderHistory from "../components/OrderHistory";
import CarlistScreen from "../components/CarList";

const ProfileStack = createStackNavigator(
  {
    // Welcome: WelcomeScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "User Profile Page"
    }
  }
);

export default ProfileStack;
