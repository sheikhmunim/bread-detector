import React from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import LoginForm from "../components/Login/LoginForm";

const LoginScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.replace("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <LoginForm onLogin={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default LoginScreen;
