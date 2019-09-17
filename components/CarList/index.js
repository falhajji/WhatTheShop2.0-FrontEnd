import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import carStore from "../../stores/carStore";
import cars from "./data";

// Component
import CarItem from "./CarItem";
// import CartButton from "../CartButton";
// import LogoutButton from "../CartButton/LogoutButton";

class CarList extends Component {
  //   static navigationOptions = ({ navigation }) => ({
  //     title: "Car List",
  //     headerLeft: null
  // headerRight: <CartButton />,
  // headerLeft: <LogoutButton />
  //   });
  render() {
    let shops = cars.map(car => <CarItem car={car} key={car.id} />);
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

export default observer(CarList);
