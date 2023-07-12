import React from "react";
import { View, StyleSheet } from "react-native";

function TopCanvas() {
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
    height: 100,
    position: "absolute",
    right: -38,
    top: 50,
    transform: [{ rotate: "-30 deg" }],
  },
  parallelogramInner: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#f8bd51",
    width: 150,
    height: 100,
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

export default TopCanvas;
