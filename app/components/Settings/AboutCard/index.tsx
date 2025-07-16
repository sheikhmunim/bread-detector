import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const AboutCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.content}>Bakery Detector App</Text>
      <Text style={styles.content}>Version: 0.1.0</Text>
      <Text style={styles.footer}>Built with ❤️ by the 4 am club</Text>
    </View>
  );
};

export default AboutCard;
