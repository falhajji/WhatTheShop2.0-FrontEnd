import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";
import CarlistScreen from "../components/CarList";

const ProfileStack = createStackNavigator(
  {
    // Welcome: WelcomeScreen,
    Profile: Profile,
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile         "
    }
  }
);

export default ProfileStack;
