import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import FilterControls from "../components/Search/FilterControls";
import SearchResultCard from "../components/Search/SearchResultCard";
import { sampleProducts } from "../utils/data/sampleProducts";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const lowerQuery = query.toLowerCase();

    const results = sampleProducts.filter(
      (item) =>
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.plu.toString().includes(lowerQuery)
    );

    setFilteredProducts(results);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <Text style={styles.heading}>Search Products</Text>

        <TextInput
          placeholder="Search by name, PLU, or category..."
          value={searchQuery}
          onChangeText={handleSearch}
          style={styles.input}
        />

        <FilterControls
          products={sampleProducts}
          onFilter={setFilteredProducts}
        />

        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.plu.toString()}
          renderItem={({ item }) => <SearchResultCard item={item} />}
          contentContainerStyle={styles.results}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
  },
  input: {
    height: 44,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  results: {
    paddingBottom: 100,
    gap: 12,
  },
});

export default SearchScreen;
