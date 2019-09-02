import React from "react";
import { KeyboardAvoidingView, View, Text, StyleSheet } from "react-native";
import Buttons from "./buttons";
import TimeForm from "./customTimeForm";
import vibrate from "../utils/vibrate";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  clockText: {
    fontSize: 72
  }
});

let intervalId;
let defaultWorkMinutes;
let defaultBreakMinutes;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workMinutes: this.props.workMinutes,
      breakMinutes: this.props.breakMinutes,
      minutes: this.props.workMinutes,
      seconds: "00",
      work: this.props.work
    };

    defaultWorkMinutes = this.state.workMinutes;
    defaultBreakMinutes = this.state.breakMinutes;
  }

  decreaseSecond = () => {
    //if seconds haven't hit zero
    if (this.state.seconds > 0) {
      this.setState(prevState => ({ seconds: this.state.seconds - 1 }));
      if (this.state.seconds < 10) {
        this.setState(prevState => ({
          seconds: "0" + this.state.seconds
        }));
      }
    } else {
      // hit zero seconds
      // if there are still minutes left
      if (this.state.minutes > 0) {
        this.setState(prevState => ({
          minutes: this.state.minutes - 1,
          seconds: "59"
        }));
      } else {
        // if switching from work to break
        if (this.state.work) {
          vibrate();
          this.setState(prevState => ({
            work: false,
            minutes: this.state.breakMinutes,
            seconds: "00"
          }));
        } else {
          // switching from break to work
          vibrate();
          this.setState(prevState => ({
            work: true,
            minutes: this.state.workMinutes,
            seconds: "00"
          }));
        }
      }
    }
  };

  startCountdown = () => {
    intervalId = setInterval(this.decreaseSecond, 1000);
  };

  stopCountdown = () => {
    clearInterval(intervalId);
  };

  resetClock = () => {
    this.stopCountdown();
    this.setState(prevState => ({
      work: true,
      minutes: defaultWorkMinutes,
      seconds: "00"
    }));
  };

  // choosing which heading to show
  getHeading = () => {
    if (this.state.work) {
      return "WORK!";
    } else {
      return "BREAK!";
    }
  };

  // show form for entering custom times
  showInput = () => {
    this.setState(prevState => ({
      showInput: !this.state.showInput
    }));
  };

  // retrieve user entered times from the form component
  getCustomTimes = (workTime, breakTime) => {
    defaultWorkMinutes = workTime;
    defaultBreakMinutes = breakTime;

    console.log("update times???", workTime);
    this.stopCountdown();
    this.setState(prevState => ({
      work: true,
      workMinutes: defaultWorkMinutes,
      breakMinutes: defaultBreakMinutes,
      seconds: "00",
      showInput: !this.state.showInput,
      minutes: defaultWorkMinutes
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.clockText}>{this.getHeading()}</Text>
        <Text style={styles.clockText}>
          {this.state.minutes}:{this.state.seconds}
        </Text>
        <Buttons
          stop={this.stopCountdown}
          start={this.startCountdown}
          reset={this.resetClock}
          showInput={this.showInput}
        />
        <View>
          {this.state.showInput ? (
            <TimeForm setTimes={this.getCustomTimes.bind(this)} />
          ) : null}
        </View>
      </View>
    );
  }
}

export default Timer;
