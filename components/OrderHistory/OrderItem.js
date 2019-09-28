import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class OrderItem extends Component {
  render() {
    const { order } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}> {order.item} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {order.unit_price}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black" }}>Quantity : {order.quantity}</Text>
        </Body>
        <Body>
          <Text style={{ color: "black" }}>
            Order Total : {order.sub_total}
          </Text>
        </Body>
        <Right></Right>
      </ListItem>
    );
  }
}

export default observer(OrderItem);
