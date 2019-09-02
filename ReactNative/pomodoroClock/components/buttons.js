import React from "react";
import { View, Button } from "react-native";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  start = () => {
    this.props.start();
  };
  stop = () => {
    this.props.stop();
  };
  reset = () => {
    this.props.reset();
  };
  showInput = () => {
    this.props.showInput();
  };

  render() {
    return (
      <View>
        <Button onPress={this.start} title="Start Countdown" />
        <Button onPress={this.stop} title="Stop Countdown" />
        <Button onPress={this.reset} title="Reset" />
        <Button onPress={this.showInput} title="Set Times" />
      </View>
    );
  }
}

export default Buttons;
