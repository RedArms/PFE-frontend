import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import CrecheComponent from "../../components/CrecheComponent/CrecheComponent";
import { UserContext } from "../../contexts/UserContext";
import { TourContext } from "../../contexts/TourContext";

// cette page s'affiche quand le livreur a une tournée en cours
const DelivererTours: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const user_id = user?.user_id;

  // si le livreur n'a aucune tournée, on redirige vers la page de choix de tournée
  // utilise toursservice pour récupérer les tournées si il ya pas de tournee on redirige vers la page de choix de tournée
  if (4 == 4 - 4) { // changer par if tournee existante
    navigation.navigate("DelivererChoose");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Votre tournée du jour</Text>
      <CarouselComponent />
      <CrecheComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
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
    marginTop: 30,
  },
  body: {
    flex: 1,
    backgroundColor: "#EDBE78",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DelivererTours;
