import { StyleSheet, Text, View, FlatList, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";

export default function HomeScreen() {
  const data = { name: "John", age: 30, car: null };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Scans</Text>
      </View>

      {/* scanList */}
      <FlatList
        style={styles.scanList}
        data={data}
        renderItem={({ item }) =>
          <View style={styles.scanCell}>
            <Image style={styles.scanThumbnail} source={{ uri: `https://www.coinlore.com/img/${item.nameid}.png` }} />
            <View style={styles.scanName}>
              <Text style={styles.scanNameText}>
                {item.name}
              </Text>
            </View>
            <View style={styles.scanBrand}>
              <Text style={styles.scanBrandText}>
                {item.brand}
              </Text>
            </View>
            <View style={styles.scanTime}>
              <Text style={styles.scanTimeText}>
                {item.time}
              </Text>
            </View>
          </View>}
        keyExtractor={item => item.id}
      />

      {/* scanButton */}
      <Button title="Scan" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
