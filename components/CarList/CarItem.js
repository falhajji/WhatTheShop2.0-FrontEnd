import React, { Component } from "react";
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Button,
  Text,
  Left,
  Right
} from "native-base";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import { Image } from "react-native";
class CarItem extends Component {
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
          <Text note numberOfLines={1}>
            {item.description}
          </Text>
        </Body>
        <Right>
          <Button transparent onPress={() => this.handlePress(item)}>
            <Text style={{ color: "#0f0a3c", fontSize: 15 }}>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(CarItem);
