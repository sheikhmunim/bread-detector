import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fefefe",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: "#666",
  },
});

export default styles;
