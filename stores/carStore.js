import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CarStore {
  cars = null;
  car = null;
  loading = true;

  fetchAllCars = async () => {
    console.log("BEFORE");
    try {
      let res = await instance.get("products/list/");
      console.log("AFTER AXIOS");
      let cars = res.data;
      this.cars = cars;
      console.log(this.cars);
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
