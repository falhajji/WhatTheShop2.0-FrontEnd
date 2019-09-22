import { decorate, observable } from "mobx";
import axios from "axios";

class CarStore {
  cars = null;
  loading = true;

  fetchAllCars = async () => {
    console.log("BEFORE");
    try {
      let res = await axios.get("http://192.168.100.186:80/products/list/");
      console.log("AFTER AXIOS");
      let cars = res.data;
      this.cars = cars;
      this.loading = false;
    } catch (err) {
      console.log("ERRORRR");
      console.error(err);
    }
  };
}

decorate(CarStore, {
  cars: observable,
  loading: observable
});

let carStore = new CarStore();
carStore.fetchAllCars();

export default carStore;
