import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";
import CarList from "../components/CarList";

const ProfileStack = createStackNavigator(
  {
    // Welcome: WelcomeScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    CarList: CarList
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile         "
    }
  }
);

export default ProfileStack;
