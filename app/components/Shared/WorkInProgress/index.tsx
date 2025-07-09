import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const WorkInProgress = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/wip.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Work in Progress</Text>
      <Text style={styles.subtitle}>
        This feature is currently being built. Please check back soon!
      </Text>
    </View>
  );
};

export default WorkInProgress;
