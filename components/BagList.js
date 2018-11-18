import React from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import BagCategory from "../components/BagCategory";

export default class Baglist extends React.Component {
  async updateCategory(index, newCategory) {
    const categories = this.props.data.slice();
    categories[index] = newCategory;
    this.props.onDataChange(categories);
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item, index }) => (
          <BagCategory
            category={item}
            updateCategory={category => this.updateCategory(index, category)}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({});
