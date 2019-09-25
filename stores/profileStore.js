// import { decorate, observable } from "mobx";
// import { instance } from "./instance";
// import axios from "axios";

// class ProfileStore {
//   profile = null;
//   loading = true;

//   fetchProfile = async () => {
//     try {
//       let res = await instance.get("");
//       // let res = await axios.get("http://localhost:80/accounts/");


//       console.log(
//         "axios deaults header",
//         axios.defaults.headers.common.Authorization
//       );

//       this.profile = res.data;
//       this.loading = false;
//     } catch (err) {
//       console.log("ERRORRR");
//       console.error(err);
//       console.log(
//         "axios deaults header",
//         axios.defaults.headers.common.Authorization
//       );
//     }
//   };
// }

// decorate(ProfileStore, {
//   profile: observable,
//   loading: observable
// });

// let profileStore = new ProfileStore();

// export default profileStore;
