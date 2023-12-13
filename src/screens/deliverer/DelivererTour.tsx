import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import CrecheComponent from "../../components/CrecheComponent/CrecheComponent";
import { UserContext } from "../../contexts/UserContext";
import { getTourByDelivererId } from "../../services/toursManagementService";
import { getItemsLeftForATour } from "../../services/itemService";
import { useIsFocused } from "@react-navigation/native";
import { Tour } from "../../models/tour";
import {ItemWithQuantity } from "../../models/Item";
import { Boxe } from "../../models/boxe";

// cette page s'affiche quand le livreur a une tournée en cours
const DelivererTour: React.FC<{ navigation: any }> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { user } = useContext(UserContext);
  const user_id = user?.user_id as number;
  const [tour, setTour] = React.useState<Tour>({} as Tour);
  const [itemsLeft, setItemsLeft] = React.useState<Boxe[]>([]);

  // si le livreur n'a aucune tournée, on redirige vers la page de choix de tournée
  // utilise toursservice pour récupérer la tournee si il ya pas de tournee on redirige vers la page de choix de tournée
  const fetchTour = async () => {
    const fetchedTour = await getTourByDelivererId(user_id);
    if (fetchedTour === undefined) {
      navigation.navigate("DelivererChoose");
      return;
    }
    setTour(fetchedTour);
    
    
    
    // récupérer les items restants pour la tournée
    const fetchedItemsLeft = await getItemsLeftForATour(tour.tour, tour.date);
    if (fetchedItemsLeft === undefined) {
      return;
    }
    fetchedItemsLeft.map((item) => {  console.log(item); });
    
    setItemsLeft(fetchedItemsLeft);
    
   
    
  };

  React.useEffect(() => {
    fetchTour();
  }, [isFocused]);

  const onHandleIndicateToDelivered = () => {
    fetchTour();
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        La tournée de {tour?.geo_zone} pour la date du{" "}
        {tour.date ? new Date(tour.date).toLocaleDateString() : "Erreur date"}
      </Text>
      <CarouselComponent items={itemsLeft} />
      <CrecheComponent
        creches={tour?.clients ?? []}
        onHandleIndicateToDelivered={onHandleIndicateToDelivered}
        date={tour.date}
        idTour={tour.tour}
      />
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

export default DelivererTour;
