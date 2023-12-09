// ItemManagementScreen.tsx

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Item } from "../../models/item";

const ItemManagementScreen: React.FC = () => {
  const itemsList: Item[] = [
    {
      item_id: 1,
      label: "Lange pour caca de bébé",
      size: "M",
    },
    {
      item_id: 2,
      label: "Lange pour caca de 3 jours (bébé constipé)",
      size: "L",
    },
    {
      item_id: 3,
      label: "Lange pour petit caca de bébé",
      size: "S",
    },
    {
      item_id: 4,
      label: "Sac à caca",
    },
  ];

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text>
        {item.label} - {item.size}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Item Management Screen</Text>
      
      <FlatList
        data={itemsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.item_id.toString()}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ItemManagementScreen;
