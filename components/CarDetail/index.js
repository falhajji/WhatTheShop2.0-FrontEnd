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
import authStore from "../../stores/authStore";
// import { throws } from "assert";

// Components
class CarDetail extends Component {
  state = {
    //description: this.props.navigation.getParam("car", {}).description,
    likes: 0,
    quantity: 1
  };

  // likeMe = () => {
  //   this.setState(likes++);
  // };
  render() {
    const item = this.props.navigation.getParam("item");

    addremovebutton = () => {
      if (authStore.user) {
        if (
          !cartStore.items.find(cartItem => cartItem.id === item.id) &&
          authStore.user
        ) {
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
      }
    };

    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: item.image }} />
                <Body>
                  <Text style={styles.text}>
                    {item.manufacturer}
                    {"\n"}
                    {item.model}
                  </Text>
                  <Text note>{item.create_date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 250, width: 400, flex: 1 }}
                />
                <Text style={styles.textlist}>
                  Description: {"\n"}
                  {item.description}
                </Text>
                <Text style={styles.textlist}>
                  {"\n"}Milage:{"\n"}
                  {item.milage}
                </Text>
                {/* <Text>
                  {"\n"}This {car.year} {car.maker} {car.model} comes with a
                  milage of {car.milage}.
                </Text> */}
                <Text style={styles.textlist}>
                  {"\n"}Color:{"\n"}
                  {item.color}
                  {"\n"}
                </Text>
                <Text style={styles.textlist}>
                  Gear:{"\n"}
                  {item.gear}
                  {"\n"}
                </Text>
                <Text style={styles.textlist}>
                  Seats:{"\n"}
                  {item.seats}
                </Text>
                <Text style={styles.textlist}>
                  Price:{"\n"}KD {item.price + "\n"}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button full danger onPress={() => this.likeMe}>
                  <Icon name="star" />
                  <Text>Likes : {this.state.likes}</Text>
                </Button>
              </Left>

              <Right>{addremovebutton()}</Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CarDetail.navigationOptions = ({ navigation }) => ({
  // title: navigation.getParam("shop", {})
  title: "Car Detail Page",
  headerRight: <CartButton />
});

export default observer(CarDetail);
