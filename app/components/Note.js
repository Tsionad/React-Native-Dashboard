import React, { Component } from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

type Props = {};

export default class Note extends Component<Props> {

        state = {
            checked: false
        }

  render() {


    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>

        <CheckBox title={this.props.val.note}
                  checked={this.state.checked}
                  onIconPress={() => this.setState({checked: !false})}
                  />

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 85,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    borderLeftWidth: 20,
    borderLeftColor: "#E91E63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 15,
    top:10,
    margin: 30,
    right: 8,

  },
  noteDeleteText: {
    color: "white",

  }
});