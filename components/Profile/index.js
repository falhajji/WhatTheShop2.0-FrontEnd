import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button, Header, Spinner } from "native-base";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import historyStore from "../../stores/historyStore";
class Profile extends Component {
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchProfile();
    }
  }
  render() {
    if (!authStore.user) this.props.navigation.replace("Login");

    if (authStore.loading) return <Spinner />;

    return (
      <Card>
        <CardItem>
          <Text>Welcome!{profileStore.profile.first_name}</Text>
        </CardItem>
        <CardItem>
          <Button
            danger
            onPress={() => authStore.logout(this.props.navigation)}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
        <CardItem>
          <Button
            danger
            onPress={() => this.props.navigation.replace("OrderHistory")}
          >
            <Text>Order History</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
