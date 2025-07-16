import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: "#28a745",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});
