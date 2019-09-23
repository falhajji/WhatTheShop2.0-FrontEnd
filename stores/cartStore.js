import { decorate, observable, action, computed } from "mobx";

class CartStore {
  items = [];

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

  checkoutCart = () => {
    this.items = [];
  };
  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed
});

export default new CartStore();
