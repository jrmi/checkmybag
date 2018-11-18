import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableNativeFeedback
} from "react-native";

export default class BagItem extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.itemView}>
          <Text style={styles.itemText}>{this.props.item.key}</Text>
          <Switch
            style={styles.itemSwitch}
            value={this.props.item.state}
            onValueChange={this.props.onPress}
          />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  itemText: {
    flex: 1,
    padding: 15,
    fontSize: 18
  },
  itemSwitch: {
    flex: 0
  }
});
