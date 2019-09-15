import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";
import Login from "./components/Login";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    // return <Login />;
  }
}
