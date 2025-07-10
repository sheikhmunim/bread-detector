import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Settings Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20 },
});

export default SettingsScreen;
