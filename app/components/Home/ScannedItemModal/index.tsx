import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Image,
} from "react-native";
import styles from "./style";

import type { Product } from "../../../utils/types/product";

type Props = {
  visible: boolean;
  item: Product | null;
  onClose: () => void;
};

const ScannedItemModal = ({ visible, item, onClose }: Props) => {
  if (!item) return null;

  const productImage = item.image || require("../../../assets/wip.jpg");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <Pressable style={styles.modalContent}>
            <View style={styles.imageContainer}>
              <Image source={productImage} style={styles.image} />
            </View>
            <Text style={styles.title}>{item.description}</Text>

            <View style={styles.detailsBox}>
              <Text style={styles.detail}>PLU: {item.plu}</Text>
              <Text style={styles.detail}>Category: {item.category}</Text>
              <Text style={styles.detail}>Wrap: {item.wrap}</Text>
              <Text style={styles.detail}>
                Baking Protocol: {item.baking_protocol || "—"}
              </Text>
              <Text style={styles.detail}>Tray Up: {item.tray_up || "—"}</Text>
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ScannedItemModal;
