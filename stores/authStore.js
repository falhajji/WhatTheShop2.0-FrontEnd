import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `JWT ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("accounts/login/", userData);
      const user = res.data;
      await this.setUser(user.token);
      navigation.replace("Profile");
    } catch (err) {
      console.error(err.stack);
    }
  };

  logout = async navigation => {
    await this.setUser();
    navigation.replace("CarList");
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("accounts/register/", userData);

      const data = res.data;

      await this.setUser(data.token);
      navigation.replace("Profile");
    } catch (err) {
      console.error(err.stack);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
