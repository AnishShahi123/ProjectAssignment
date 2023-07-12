import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.heading}</Text>
      <Text style={styles.subtitle}>{props.subtitle} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "800",
    position: "absolute",
    right: 90,
  },
  subtitle: {
    position: "absolute",
    right: 15,
    marginTop: 20,
    opacity: 0.5,
    fontWeight: "bold",
  },
  container: {
    paddingVertical: 16,
  },
});

export default Title;
