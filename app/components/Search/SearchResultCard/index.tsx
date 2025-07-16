import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { breadPlaceholder } from "../../../utils/types/images";

import type { Product } from "../../../utils/types/product";

type Props = {
  item: Product;
  onPress?: () => void;
};

const SearchResultCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={breadPlaceholder || "../../../assets/bread-placeholder.png"}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.detail}>PLU: {item.plu}</Text>
        <Text style={styles.detail}>Category: {item.category}</Text>
        {item.baking_protocol && (
          <Text style={styles.detail}>Protocol: {item.baking_protocol}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SearchResultCard;
