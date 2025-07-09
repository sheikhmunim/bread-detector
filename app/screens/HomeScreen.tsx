import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WorkInProgress from "../components/Shared/WorkInProgress";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WorkInProgress />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
  },
});

export default HomeScreen;
