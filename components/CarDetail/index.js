import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//Store
import cartStore from "../../stores/cartStore";
// import car from "./data";

// Components
// import CartButton from "../CartButton";

class CarDetail extends Component {
  state = {
    maker: "",
    model: "",
    color: "",
    gear: "",
    year: "",
    milage: "",
    price: "",
    image: ""
  };

  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.getParam("shop", {}).maker,
  //   headerRight: <CartButton />
  // });

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  handleAdd = () => {
    let item = {
      ...this.state,
      quantity: 1
    };
    cartStore.addItemToCart(item);
  };

  render() {
    const car = this.props.navigation.getParam("shop", {});
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {car.maker + "\n"}
                <Text note>{car.model}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: car.image }} />
            </Right>
          </ListItem>
          {/* <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker> */}
          {/* </Left> */}
          {/* <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body> */}
          {/* </ListItem> */}
          {/* <Button full danger onPress={this.handleAdd}>
            <Text>Add</Text>
          </Button> */}
        </List>
      </Content>
    );
  }
}

export default observer(CarDetail);
