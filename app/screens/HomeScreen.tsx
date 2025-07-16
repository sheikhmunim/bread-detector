import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import RecentScanCard from "../components/Home/RecentScanCard";
import ScannedItemModal from "../components/Home/ScannedItemModal";
import FloatingScanButton from "../components/Home/FloatingScanButton";
import { sampleProducts } from "../utils/data/sampleProducts";

const HomeScreen = () => {
  const [selectedScan, setSelectedScan] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = (item: any) => {
    setSelectedScan(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedScan(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome back, User!</Text>

        <FlatList
          data={sampleProducts} // show only latest 12 scanned items
          keyExtractor={(item) => item.plu.toString()}
          renderItem={({ item }) => (
            <RecentScanCard item={item} onPress={() => handleCardPress(item)} />
          )}
          contentContainerStyle={styles.list}
        />

        <ScannedItemModal
          visible={modalVisible}
          item={selectedScan}
          onClose={closeModal}
        />

        <FloatingScanButton />
      </View>
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
    marginBottom: 16,
  },
  list: {
    gap: 12,
    paddingBottom: 100,
  },
});

export default HomeScreen;
