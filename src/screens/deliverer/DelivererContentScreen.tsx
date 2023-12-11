import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView , View} from "react-native";
import QuantityLine from "../../components/QuantityLine/QuantityLine";
import ButtonChoose from "../../components/button/ButtonChoose";

import { Boxe } from "../../models/boxe";
import { TourContext } from "../../contexts/TourContext";

import { UserContext } from "../../contexts/UserContext";
import { Tour } from "../../models/tour";

const DelivererContentScreen: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const { id } = route.params;
  const { user } = useContext(UserContext);
  const { getToursToday, setDelivererDB } = useContext(TourContext);

  const [boxeData, setBoxeData] = useState<Boxe[]>([]);
  const [date, setDate] = useState<string>("");

  const [tour, setTour] = useState<Tour | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boxe = await getToursToday();
        const fetchedTour = boxe.find((tour) => tour.tour === id);
        setTour(fetchedTour);
        setDate(fetchedTour?.date ?? "");
        setBoxeData(fetchedTour?.content ?? []);
      } catch (error) {
        console.error("Error fetching boxe:", error);
      }
    };

    fetchData();
  }, [getToursToday, id]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        Tournée de {tour?.geo_zone} du{" "}
        {tour?.date ? new Date(tour?.date).toLocaleDateString() : ""}
      </Text>
      {boxeData.map((boxe, index) => (
        <QuantityLine key={index} quantity={boxe.quantity} label={boxe.name} />
      ))}
      <View style={styles.btn}>
      <ButtonChoose
        valueString="Lancer la tournée"
        method={async () => {
          await setDelivererDB(id, date, user?.user_id);
          navigation.navigate("DelivererTours", { id: id }); // TODO: change to id
        }}
      />
      </View>
    </ScrollView>
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
    margin: 10,
    textAlign: "center",
  },
  btn: {
    
    alignItems: "center",
  
  },
  body: {
    flex: 1,
    backgroundColor: "#EDBE78",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DelivererContentScreen;
