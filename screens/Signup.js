import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import GradientButton from "../components/GradientButton";
import TopCanvas from "../components/TopCanvas";
import BottomCanvas from "../components/BottomCanvas";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      alert("All field Required");
      return;
    }
    // Making an API request to the server for registration
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handling the response from the server
        console.log("Registration successful:", data);
        alert("User Registered");
        alert(data);
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred during registration. Please try again.");
      });
  };

  const handleSignIn = () => {
    // Navigate to the LoginPage
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TopCanvas />
      <BottomCanvas />
      <TouchableOpacity style={styles.backarrow} onPress={handleSignIn}>
        <Ionicon name="arrow-back" size={40} />
      </TouchableOpacity>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.SectionStyle}>
        <Ionicon name="person" size={20} />
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={(data) => setFullName(data)}
          style={styles.input}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Ionicon name="mail" size={20} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(data) => setEmail(data)}
          style={styles.input}
        />
      </View>
      <View style={styles.SectionStylePassword}>
        <Ionicon name="keypad" size={20} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(data) => setPassword(data)}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.SectionStylePassword}>
        <Ionicon name="keypad" size={20} />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(data) => setConfirmPassword(data)}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <GradientButton text="SIGN UP" />
          {/* <Text style={styles.buttonTextStyle}>
            SIGN UP <Ionicon name="arrow-forward" size={20} />
          </Text> */}
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>
        Already have an account?{" "}
        <Text style={styles.signInText} onPress={handleSignIn}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    borderBottomWidth: 1,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  SectionStylePassword: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    borderBottomWidth: 1,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 290,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0,
    borderRadius: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    position: "absolute",
    top: 140,
    left: 30,
  },
  bottomText: {
    color: "black",
    fontSize: 18,
    position: "absolute",
    bottom: 50,
    left: 90,
  },
  signInText: {
    color: "#FF9800",
    fontSize: 18,
    fontWeight: "bold",
  },
  backarrow: {
    position: "absolute",
    top: 60,
    left: 20,
  },
});

export default Signup;
