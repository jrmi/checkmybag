import React from "react";
import { StyleSheet, Text, View, Switch, FlatList } from "react-native";
import BagItem from "./BagItem";

export default class BagCategory extends React.Component {
  updateItemState(index) {
    const data = this.props.category.data.slice();
    data[index].state = !data[index].state;
    this.props.updateCategory({ key: this.props.category.key, data });
  }

  itemSelectedCount() {
    return this.props.category.data.reduce((acc, item) => {
      if (item.state) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  render() {
    return (
      <View>
        <Text style={styles.sectionHeader}>
          {this.props.category.key} ({this.itemSelectedCount()}/
          {this.props.category.data.length})
        </Text>
        <FlatList
          data={this.props.category.data}
          renderItem={({ item, index }) => (
            <BagItem item={item} onPress={() => this.updateItemState(index)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1
  }
});
