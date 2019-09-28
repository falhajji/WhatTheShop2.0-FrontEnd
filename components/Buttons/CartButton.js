import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";
import Styles from "./styles";

// Stores
import cartStore from "../../stores/cartStore";

class CartButton extends Component {
  render() {
    return (
      <Button
        transparent
        onPress={() => this.props.navigation.navigate("CarCart")}
      >
        <Text style={Styles.text}>
          {cartStore.items.length}
          <Icon
            type="FontAwesome"
            name="shopping-cart"
            style={{ color: "#0f0a3c", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(CartButton));
