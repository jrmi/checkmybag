import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>Am'I ready for my journey ?</Text>
        <View style={styles.continueButton}>
          <Button
            title="Check it out…"
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
