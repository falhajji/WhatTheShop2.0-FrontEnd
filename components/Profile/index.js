import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button, Header, Spinner } from "native-base";
import authStore from "../../stores/authStore";
// import profileStore from "../../stores/profileStore";

class Profile extends Component {
  componentDidMount = () => {
    // if (authStore.user) profileStore.fetchProfile();
    console.log("[Profile.js]: ", authStore.user);
  };
  render() {
    if (!authStore.user) return <Spinner />;
    if (authStore.loading) return <Spinner />;
    return (
      <Card>
        <CardItem>
          <Text>
            Welcome {authStore.user.username}!{"\n"}
          </Text>
        </CardItem>
        <CardItem>
          <Button
            danger
            onPress={() => authStore.logout(this.props.navigation)}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
