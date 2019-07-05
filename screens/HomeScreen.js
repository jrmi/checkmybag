import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

import i18n from 'i18n-js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>{i18n.t("ready?")}</Text>
        <View style={styles.continueButton}>
          <Button
            title={i18n.t("checkit")}
            onPress={() => this.props.navigation.navigate("Bag")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 40
  },
  getStartedText: {
    fontSize: 30,
    textAlign: "center"
  },
  continueButton: {
    fontSize: 40,
    padding: 20
  }
});
