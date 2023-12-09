import React from "react";
import { Item } from "../../../models/item";
import { View , Text} from "react-native";

const ItemComponent = ({ item }: { item: Item }) => (
    <View  >
      <Text>{item.label} - {item.size}</Text>
    </View>
  );

  export default ItemComponent;