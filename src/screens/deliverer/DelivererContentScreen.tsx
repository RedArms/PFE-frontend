import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getMonthString } from "../../utils/month";

const DelivererContentScreen = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // MONTHS START AT 0
  const day: number = today.getDate();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Tournées du {day} {getMonthString(month)} {year}!
      </Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDBE78",
  },
  header: {
    height: 60,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "#EDBE78",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DelivererContentScreen;
