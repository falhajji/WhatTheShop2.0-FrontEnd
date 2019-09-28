import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";

class NotificationButton extends Component {
  render() {
    return (
      <Button
        light
        transparent
        onPress={() => this.props.navigation.navigate("CarCart")}
      >
        <Text style={{ color: "red", fontSize: 15 }}>
          Items[{cartStore.items.length}]in cart
          <Icon
            type="FontAwesome"
            name="bell"
            style={{ color: "red", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(NotificationButton));
