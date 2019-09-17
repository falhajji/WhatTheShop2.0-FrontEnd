import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import carStore from "../../store/carStore";

// Component
import CarItem from "./CarItem";
// import CartButton from "../CartButton";
// import LogoutButton from "../CartButton/LogoutButton";

class CarList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Car List",
    headerLeft: null
    // headerRight: <CartButton />,
    // headerLeft: <LogoutButton />
  });
  render() {
    const coffeeshops = carStore.coffeeshops;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

export default observer(CarList);
