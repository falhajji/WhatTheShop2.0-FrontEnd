import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Content, Icon } from "native-base";
import styles from "./styles";
import CarItem from "./CarItem";
import carStore from "../../stores/carStore";
import CartButton from "../Buttons/CartButton";
import LogoutButton from "../Buttons/LogoutButton";

class CarList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "                    Car List",
    headerRight: <CartButton />,
    headerLeft: <LogoutButton />
  });

  render() {
    let carList = carStore.availableCars.map(item => (
      <CarItem item={item} key={item.id} />
    ));
    if (carStore.loading) {
      return <Spinner />;
    }
    return (
      <Content>
        <List style={styles.textlist}>{carList}</List>
      </Content>
    );
  }
}

export default observer(CarList);
