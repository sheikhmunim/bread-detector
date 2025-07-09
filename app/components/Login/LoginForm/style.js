import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 350,
    alignSelf: "center", // center form horizontally
    paddingHorizontal: 16, // side padding on small screens
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 6, // tighter spacing between input and error
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 12, // extra space after error, before next input
  },
  button: {
    backgroundColor: "#333",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16, // spacing from last input field
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
