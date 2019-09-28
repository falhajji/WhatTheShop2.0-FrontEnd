import { decorate, observable, action, computed } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];
  loading = true;

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
      console.error(err.stack);
    }
  };

  checkoutCart = async () => {
    try {
      const res = await instance.get("cart/checkout/");
      this.cart = res.data;
      this.loading = false;
      this.items = [];
      return true;
      navigation.replace("Checkout");
    } catch (err) {
      console.error(err.stack);
    }
  };

  checkoutCart = async () => {
    try {
      const res = await instance.get("cart/checkout/");
      this.cart = res.data;
      this.loading = false;
      navigation.replace("Checkout");
    } catch (err) {
      console.error(err);
    }
  };

  fetchCart = async () => {
    try {
      const res = await instance.get();
      let hello = res.data;
      this.items = hello.cart_items;
      this.loading = false;
    } catch (err) {
      console.error(err.stack);
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
