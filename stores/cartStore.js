import { decorate, observable, action, computed } from "mobx";
import { instance } from "./instance";
import profileStore from "../stores/profileStore";
import carStore from "../stores/carStore";

class CartStore {
  items = [];
  loading = true;
  totalz = 0;

  addItemToCart = async item => {
    const exists = this.items.find(cartItem => cartItem.id === item.id);
    if (!exists) {
      try {
        const res = await instance.post("cart/", {
          product: item.id
        });
        this.items.push(item);
        this.loading = false;
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };
  removeItemFromCart = async deletedItem => {
    try {
      const res = await instance.delete("cart/", {
        data: {
          product: deletedItem.id
        }
      });
      this.items = this.items.filter(item => item.id !== deletedItem.id);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  //   checkoutCart = async () => {
  //     try {
  //       const res = await instance.get("cart/checkout/");
  //       this.cart = res.data;
  //       this.loading = false;
  //       this.items = [];
  //       return true;
  //       navigation.replace("Checkout");
  //     } catch (err) {
  //       console.error(err.stack);
  //     }
  //   };

  checkoutCart = async () => {
    if (this.items.length) {
      try {
        const res = await instance.get("cart/checkout/");
        this.loading = false;
        this.items.forEach(item => carStore.removeCar(item));
        this.items = [];
        profileStore.addToHistory(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };
  fetchCart = async () => {
    try {
      const res = await instance.get("cart/");
      this.items = [];
      res.data.cart_items.forEach(cartItem =>
        this.items.push(carStore.getCarById(cartItem.product))
      );
      console.log("fetchcar", this.items);
      this.totalz = res.data.total;
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
decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  loading: observable
});

export default new CartStore();
