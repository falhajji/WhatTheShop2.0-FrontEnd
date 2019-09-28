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
  Card,
  Container,
  Content,
  CardItem,
  Icon
} from "native-base";
import { Image } from "react-native";

// Style
import styles from "./styles";

//Store
import cartStore from "../../stores/cartStore";
import CartButton from "../Buttons/CartButton";
// import { throws } from "assert";

// Components
class CarDetail extends Component {
  state = {
    //description: this.props.navigation.getParam("car", {}).description,
    likes: 0,
    quantity: 1
  };

  likeMe = () => {
    this.setState(likes++);
  };
  render() {
    const item = this.props.navigation.getParam("item");
    addremovebutton = () => {
      if (!cartStore.items.find(cartItem => cartItem.id === item.id)) {
        return (
          <Button full danger onPress={() => cartStore.addItemToCart(item)}>
            <Text>Add To Cart</Text>
          </Button>
        );
      } else {
        return (
          <Button
            full
            danger
            onPress={() => cartStore.removeItemFromCart(item)}
          >
            <Text>Remove from Cart</Text>
          </Button>
        );
      }
    };

    return (
      <>
        <Image
          source={{ uri: item.image }}
          style={{
            height: 200,
            width: "auto",
            flex: 1,
            marginBottom: 20
          }}
        />
        <Container>
          <Content padder>
            <Left>
              <Text style={{ textAlign: "right", alignSelf: "stretch" }}>
                Description: {item.description}
              </Text>
              <Text style={styles.textlist}>Color: {item.color}</Text>
              <Text style={styles.textlist}>Gear: {item.gear}</Text>
              <Text style={styles.textlist}>Gear: {item.gear}</Text>
              <Text style={styles.textlist}>Milage: {item.milage}</Text>
              <Text style={styles.textlist}>Price: KD {item.price + "\n"}</Text>
            </Left>
            <Left>
              <Button full danger onPress={() => this.likeMe}>
                <Icon name="star" />
                <Text>Likes : {this.state.likes}</Text>
              </Button>
            </Left>
            <Right>{addremovebutton()}</Right>
          </Content>
        </Container>
      </>
    );
  }
}

CarDetail.navigationOptions = ({ navigation }) => ({
  // title: navigation.getParam("shop", {})
  title: "Car Detail Page",
  headerRight: <CartButton />
});

export default observer(CarDetail);
