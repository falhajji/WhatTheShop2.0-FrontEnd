import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Thumbnail
} from "native-base";
import cartStore from "../../stores/cartStore";

class CartItem extends Component {
  handlePress = item => {
    this.props.navigation.navigate("CarDetail", {
      item: item
    });
  };
  render() {
    const item = this.props.item;
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: item.image }} />
        </Left>
        <Body>
          <Text>
            {item.manufacturer} {item.model} {item.year}
          </Text>
          <Text note style={{ color: "black" }} numberOfLines={1}>
            KD {item.price}
          </Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => cartStore.removeItemFromCart(item)}
          >
            <Text style={{ color: "red" }}>Remove</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
