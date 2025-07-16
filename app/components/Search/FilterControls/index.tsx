import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import type { Product } from "../../../utils/types/product";
import styles from "./style";

type FilterControlsProps = {
  products: Product[];
  onFilter: (results: Product[]) => void;
};

const FilterControls = ({ products, onFilter }: FilterControlsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(products.map((item) => item.category))).sort(),
  ];

  useEffect(() => {
    if (selectedCategory === "All") {
      onFilter(products);
    } else {
      const filtered = products.filter(
        (item) => item.category === selectedCategory
      );
      onFilter(filtered);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filter by Category:</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(value: string) => setSelectedCategory(value)}
        style={styles.picker}
      >
        {uniqueCategories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>
    </View>
  );
};

export default FilterControls;
