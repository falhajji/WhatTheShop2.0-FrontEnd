import { decorate, observable } from "mobx";
import axios from "axios";

class CarStore {
  cars = null;
  loading = true;

  fetchAllCars = async () => {
    try {
      let res = await axios.get("http://muffinbase.com");
      let cars = res.data;
      this.cars = cars;
      this.loading = false;
    } catch (err) {
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
