import React from "react";
import { StyleSheet, View, Button } from "react-native";

import fr from "../assets/data/fr";
import en from "../assets/data/en";

import BagList from "../components/BagList";

import { AsyncStorage } from "react-native";

const defaultData = en.categories;

export default class BaglistScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.onDataChange = this.onDataChange.bind(this);
    this._loadData = this._loadData.bind(this);
    this._loadData();
  }

  async resetData() {
    this.state.data.forEach(cat => {
      cat.data.forEach(item => {
        item.state = false;
      });
    });
    await this.setState({ data: this.state.data });
    await this._storeData();
    this.props.navigation.navigate("Main");
  }

  async _storeData() {
    try {
      await AsyncStorage.setItem("data", JSON.stringify(this.state.data));
    } catch (error) {}
  }

  async _loadData() {
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      } else {
        this.setState({ data: defaultData });
      }
    } catch (error) {
      this.setState({ data: defaultData });
    }
  }

  async onDataChange(data) {
    this.setState({ data: data });
    await this._storeData();
  }

  render() {
    return (
      <View style={styles.container}>
        <BagList data={this.state.data} onDataChange={this.onDataChange} />
        <Button title="Start over" onPress={() => this.resetData()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
  },
  contentContainer: {
    paddingTop: 30
  }
});
