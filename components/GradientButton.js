import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicon from "react-native-vector-icons/Ionicons";

const GradientButton = ({ colors, text }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#FFFF00", "#F44336"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1.5, y: 0.5 }}
        style={styles.button}
      >
        <Text style={styles.text}>
          {text} <Ionicon name="arrow-forward" size={20} />
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: "transparent",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GradientButton;
