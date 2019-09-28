import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Spinner,
  Container,
  Header,
  Content,
  Accordion,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right
} from "native-base";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import carStore from "../../stores/carStore";
import cartStore from "../../stores/cartStore";
import NotificationButton from "../Buttons/NotificationButton";
class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Car List",
    headerLeft: null,
    headerRight: <NotificationButton />
  });

  handlePress = item => {
    this.props.navigation.navigate("CarDetail", {
      item: item
    });
  };
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchProfile();
      profileStore.fetchHistory();
      cartStore.fetchCart();
    }
  }
  render() {
    if (!authStore.user) this.props.navigation.replace("Login");

    if (authStore.loading) return <Spinner />;
    const dataArray = [];
    profileStore.carts.forEach(cart =>
      dataArray.push({
        title: "Order Total: " + cart.total + "KD",
        content: cart
      })
    );

    _renderContent = item => {
      let zzz = item.content.cart_items.map(cartItem => {
        let item = carStore.getCarById(cartItem.product);
        return (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: item.image }} />
            </Left>
            <Body>
              <Text>
                {item.manufacturer} {item.model} {item.year}
              </Text>
            </Body>
            <Right>
              <Button transparent onPress={() => this.handlePress(item)}>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        );
      });
      return <List>{zzz}</List>;
    };
    return (
      <Container>
        <Content padder>
          <Text>Welcome! {profileStore.profile.email}</Text>
          <Text>{"\n"}Order History</Text>
          <Accordion
            renderContent={_renderContent}
            dataArray={dataArray}
            style={{ marginTop: 20 }}
          />
          <Button
            danger
            onPress={() => authStore.logout(this.props.navigation)}
            style={{ marginTop: 20 }}
          >
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default observer(Profile);
