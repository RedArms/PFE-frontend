import React from "react";
import { Item } from "../../../models/item";
import { View , Text , StyleSheet} from "react-native";

const ItemComponent: React.FC<{ item: Item }> = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.text}>{item.label} {item.size ? `Taille : ${item.size}` : '' }</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderRadius: 8, 
    backgroundColor: "gray",  
    marginBottom: 8,
  },
  text: {
    color: "white",
  },
});

export default ItemComponent;