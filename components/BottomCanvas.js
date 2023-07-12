import React from "react";
import { View, StyleSheet } from "react-native";

function BottomCanvas() {
  return (
    <View style={styles.parallelogram}>
      <View style={styles.parallelogramInner} />
      <View style={styles.parallelogramLeft} />
    </View>
  );
}
const styles = StyleSheet.create({
  parallelogram: {
    width: 150,
    height: 80,
    transform: [{ rotate: "-30 deg" }],
    position: "absolute",
    top: 60,
    right: -60,
  },
  parallelogramInner: {
    position: "absolute",
    left: -10,
    top: 0,
    backgroundColor: "#fdcd83",
    width: 150,
    height: 80,
    borderRadius: 20,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: "absolute",
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: "absolute",
  },
});

export default BottomCanvas;
