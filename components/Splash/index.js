import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Container } from "native-base";
import authStore from "../../stores/authStore";
import { Image } from "react-native";
class Splash extends Component {
  logo = require("../../assets/wheels-deals-logo.png");
  componentDidMount() {
    setTimeout(() => {
      if (authStore.user) this.props.navigation.navigate("Profile", {});
      else this.props.navigation.navigate("Signup", {});
    }, 3000);
  }

  render() {
    return (
      <Container
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <Image
          source={this.logo}
          style={{
            width: "50%",
            resizeMode: "contain"
          }}
        />
      </Container>
    );
  }
}

export default observer(Splash);
