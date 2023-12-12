import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import CrecheComponent from "../../components/CrecheComponent/CrecheComponent";

const DelivererTours: React.FC<{  navigation : any}> = ({ navigation }) => {
  
  

  // si le livreur n'a aucune tournée, on redirige vers la page de choix de tournée


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Choix de la tournée 
      </Text>
      <CarouselComponent />
      <CrecheComponent />
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

export default DelivererTours;
