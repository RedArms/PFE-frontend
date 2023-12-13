import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Boxe } from "../../models/boxe";

const CrecheBoxeRequested: React.FC<{ boxe: Boxe }> = ({ boxe }) => {
  return (
    <View>
      <Text style={styles.name}>
        {boxe.quantity} {boxe.name} {boxe.size ? `Taille ${boxe.size}` : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5,
  },
  size: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default CrecheBoxeRequested;
