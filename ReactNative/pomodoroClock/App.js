import React from "react";
import Timer from "./components/timer";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Timer workMinutes="25" breakMinutes="5" work="true" />
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
