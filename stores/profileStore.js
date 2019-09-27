import { decorate, observable } from "mobx";
import { instance } from "./instance";
import authStore from "../stores/authStore";
class ProfileStore {
  profile = "";
  loading = true;

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
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();

export default profileStore;
