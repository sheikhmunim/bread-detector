import React from "react";
import { View, Text, Switch } from "react-native";
import styles from "./style";

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleSwitch = () => setIsDark((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={toggleSwitch} />
    </View>
  );
};

export default ThemeToggle;
