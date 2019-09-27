import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";

class HistoryStore {
  orders = [];
  order = null;
  t;
  loading = true;

  fetchOrder = async () => {
    try {
      const res = await instance.get("cart/history/");
      this.orders = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(HistoryStore, {
  orders: observable,
  order: observable,
  loading: observable
});

export default new HistoryStore();
