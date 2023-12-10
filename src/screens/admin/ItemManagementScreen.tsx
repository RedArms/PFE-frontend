import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Item } from "../../models/item";
import ItemComponent from "./components/Item";
import AddItemComponent from "./components/AddItemComponent";
import { getAllItems } from "../../services/itemService";

const ItemManagementScreen: React.FC = () => {
  const [itemsList, setItemsList] = React.useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllItems();
      if (data) setItemsList(data);
    };
    fetchData();
  }, []);

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
