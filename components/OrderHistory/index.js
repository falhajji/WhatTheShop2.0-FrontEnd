import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Spinner, ListItem } from "native-base";
import { withNavigation } from "react-navigation";

// Component
import OrderItem from "./OrderItem";

//Store
import historyStore from "../../stores/historyStore";
import authStore from "../../stores/authStore";

class OrderHistory extends Component {
  componentDidMount = () => {
    if (authStore.user) {
      historyStore.fetchOrder();
    }
  };

  render() {
    const orders = historyStore.orders;
    let OrderItem;
    if (historyStore.loading) {
      return <Spinner />;
    }

    OrderItem = orders.map(order => <OrderItem order={order} key={order.id} />);
    return <List>{OrderItem}</List>;
  }
}

export default withNavigation(observer(OrderHistory));
