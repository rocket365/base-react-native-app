import React, { Component, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { resetPage } from "../actions/nav.action";
import { connect } from "react-redux";
import { getToken } from "../helpers/storage.helper";
class SplashScreen extends Component {
  render(): ReactNode {
    return <View style={styles.container} />;
  }

  componentDidMount = async () => {
  };
}

export default connect(null, { resetPage })(SplashScreen);

const styles = StyleSheet.create({
  container: {}
});
