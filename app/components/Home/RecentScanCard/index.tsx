import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import styles from "./style";

import type { Product } from "../../../utils/types/product";

type Props = {
  item: Product;
  onPress: () => void;
};

const RecentScanCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={require("../../../assets/bread-placeholder.png")} // replace with your own fallback icon
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.description}</Text>
        <Text style={styles.plu}>PLU: {item.plu}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentScanCard;
