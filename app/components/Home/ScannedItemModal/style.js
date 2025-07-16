import { StyleSheet } from "react-native";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    paddingBottom: 20,
    borderRadius: 16,
    backgroundColor: "#fff",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: "hidden", // Important for rounded corners
  },
  imageContainer: {
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 16,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  detailsBox: {
    gap: 6,
    paddingHorizontal: 20,
  },
  detail: {
    fontSize: 15,
    color: "#333",
    textAlign: "left",
  },
});
