import React, {  } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { Item } from "../../models/item";
import ItemComponent from "./components/Item";
import AddItemComponent from "./components/AddItemComponent";
const ItemManagementScreen: React.FC = () => {
  
  const itemsList: Item[] = [
  ];

 // add 25 items to the list for the example
  for (let i = 1; i < 25; i++) {
    const item: Item = {
      item_id: i,
      label: `Article ${i}`,
      size: i % 2 == 0 ? "M" : i % 3 == 0 ? "L" : undefined,
    };
    itemsList.push(item);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les articles présents</Text>

      <FlatList
        data={itemsList}
        renderItem={({ item }) => <ItemComponent item={item} />}
        keyExtractor={(item) => item.item_id.toString()}
      />

  
      <AddItemComponent />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ItemManagementScreen;
