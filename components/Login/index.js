import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Content,
  Card,
  CardItem
} from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.replace("Profile");
    return (
      <Content>
        <Card>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              full
              onPress={() => authStore.login(this.state, navigation)}
            >
              <Text>Login</Text>
            </Button>
          </Form>
        </Card>
        <Card>
          <CardItem>
            <Text style={{ fontSize: 15 }}>
              If you don't have an account, click here to sign up to see some
              Wheels Deals{" "}
            </Text>
          </CardItem>
          <Button
            success
            full
            onPress={() => this.props.navigation.replace("Signup")}
          >
            <Text>Sign Up</Text>
          </Button>
        </Card>
      </Content>
    );
  }
}
export default observer(Login);
