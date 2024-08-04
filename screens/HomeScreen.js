import { StyleSheet, Text, View, FlatList, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import ScanCell from "../components/ScanCell";

export default function HomeScreen() {
  const [scan, setScan] = useState([
    { key: "1", name: "Sunscreen", brand: "Dove", time: "12 hours" },
    { key: "2", name: "Cleanser", brand: "Cerave", time: "7 months" }
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Scans</Text>
      </View>

      {/* scanList */}
      <FlatList style={styles.scanList} data={scan} renderItem={({ item }) => <ScanCell name={item.name} brand={item.brand} time={item.time} />} />

      {/* scanButton */}
      <Button title="Scan" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#FAF9F6",
    paddingVertical: 60,
    paddingHorizontal: 20
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold"
  },
  scanList: {}
});
