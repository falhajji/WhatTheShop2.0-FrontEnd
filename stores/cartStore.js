import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";

class CartStore {
  items = [];
  cart = [];
  loading = true;

  addItemToCart = item => {
    // console.log("Cart Store add item to cart", item);
    const foundItem = this.items.find(
      cartItem => cartItem.model == item.model && cartItem.year == item.year
    );
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(item);
    }
    console.log(this.items);
  };

  removeItemFromCart = itemToDelete =>
    (this.items = this.items.filter(cartItem => cartItem !== itemToDelete));

  checkoutCart = async () => {
    try {
      const res = await instance.get("checkout/");
      this.cart = res.data;
      this.loading = false;
      navigation.replace("Checkout");
    } catch (err) {
      console.error(err);
    }
  };
  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }

  fetchCart = async () => {
    try {
      const res = await instance.get();
      this.cart = res.data;
      this.loading = false;
      console.log("fetchCart in cartstore", this.cart);
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed,
  loading: observable
});

export default new CartStore();
