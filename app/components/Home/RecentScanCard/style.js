import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 6,
    backgroundColor: "#ddd",
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  plu: {
    fontSize: 14,
    color: "#333",
  },
  category: {
    fontSize: 12,
    color: "#777",
  },
});
