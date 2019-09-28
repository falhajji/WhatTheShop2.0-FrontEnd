import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

const LogoutButton = ({ navigation }) => {
  if (authStore.user) {
    return (
      <Button danger onPress={() => authStore.logout(navigation)}>
        <Text>Logout</Text>
      </Button>
    );
  }
};

export default withNavigation(observer(LogoutButton));
