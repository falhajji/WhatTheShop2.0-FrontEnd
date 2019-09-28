import { decorate, observable, action, computed } from "mobx";
import { instance } from "./instance";
class ProfileStore {
  profile = "";
  loading = true;
  carts = [];
  cart = "";

  fetchProfile = async () => {
    try {
      let res = await instance.get("accounts/");
      instance("fetchProfile", res.data);
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.stack);
    }
  };
  addToHistory = cart => {
    this.carts.push(cart);
  };
  fetchHistory = async () => {
    try {
      const res = await instance.get("cart/history/");
      this.carts = res.data;
      this.loading = false;
    } catch (err) {
      if (res.status === 404) {
        carts = [];
      } else {
        console.error(err.status);
      }
    }
  };
}
decorate(ProfileStore, {
  fetchProfile: action,
  fetchHistory: action,
  addToHistory: action,
  carts: observable,
  cart: observable,
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();

export default profileStore;
