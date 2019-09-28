import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";
import { TouchableHighlight, View, Modal } from "react-native";
import cartStore from "../../stores/cartStore";

class NotificationButton extends Component {
  state = {
    modalVisible: null
  };
  componentWillMount() {
    this.setState({ modalVisible: false });
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    console.log("CLICKED!");
  }

  render() {
    return (
      <>
        <Button
          light
          transparent
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <Text style={{ color: "red", fontSize: 15 }}>
            <Icon
              type="FontAwesome"
              name="bell"
              style={{ color: "red", fontSize: 15 }}
            />
          </Text>
        </Button>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              marginTop: 60,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                padding: 10,
                width: "90%",
                backgroundColor: "#f1f2f2",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 20, color: "#6d6e71" }}>
                Your Notifications
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: "white",
                width: "90%",
                height: 300
              }}
            >
              <Text>Hello World!</Text>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

export default withNavigation(observer(NotificationButton));
