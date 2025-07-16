import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const FloatingScanButton = () => {
  const handleScanPress = () => {
    console.log("Launching scanner..."); // Placeholder for camera logic
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleScanPress}>
      <Ionicons name="camera-outline" size={28} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingScanButton;
