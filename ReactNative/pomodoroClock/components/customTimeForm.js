import React from "react";
import { View, TextInput, Button, StyleSheet, Keyboard } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderColor: "grey",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: "",
      breakTime: ""
    };
  }

  static propTypes = {};

  sendTimes = (workTime, breakTime) => {
    this.props.setTimes(workTime, breakTime);
  };

  handleWorkChange = workTime => {
    this.setState({ workTime });
  };

  handleBreakChange = breakTime => {
    this.setState({ breakTime });
  };

  render() {
    return (
      <View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={this.handleWorkChange}
            value={this.state.workTime}
            placeholder="Work?"
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={this.handleBreakChange}
            value={this.state.breakTime}
            placeholder="Breaks?"
            onBlur={Keyboard.dismiss}
          />
        </View>

        <Button
          title="Submit"
          onPress={() =>
            this.sendTimes(this.state.workTime, this.state.breakTime)
          }
        />
      </View>
    );
  }
}

export default Input;
