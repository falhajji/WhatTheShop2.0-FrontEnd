import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button, Header } from "native-base";
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  return (
    <Card>
      <CardItem>
        <Text>Welcome (How do I pass first_name)!{"\n"}</Text>
      </CardItem>
      <CardItem>
        <Button danger onPress={() => authStore.logout(navigation)}>
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
