import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ThemeToggle from "../components/Settings/ThemeToggle";
import AboutCard from "../components/Settings/AboutCard";
import LogoutButton from "../components/Settings/LogoutButton";

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <ThemeToggle />
      <AboutCard />
      <LogoutButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default SettingsScreen;
