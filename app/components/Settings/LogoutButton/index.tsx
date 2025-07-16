import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

const LogoutButton = () => {
  const handleLogout = () => {
    console.log("Logging out...");
    // TODO: actual logout logic (clear auth, redirect, etc.)
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
