import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Signup from "../components/Signup";
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
