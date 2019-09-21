import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

// Navigation
import { withNavigation } from "react-navigation";

class CarItem extends Component {
  handlePress = () => {
    this.props.navigation.navigate("CarDetail", {
      shop: this.props.car
    });
  };

  render() {
    const { car } = this.props;
    return (
      <ListItem button onPress={this.handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: car.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.textlist}>{car.maker}</Text>
              <Text note style={styles.textlist}>
                {car.model}
              </Text>
              <Text style={styles.textlist}>{car.color}</Text>
              <Text style={styles.textlist}>{car.year}</Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default withNavigation(CarItem);
