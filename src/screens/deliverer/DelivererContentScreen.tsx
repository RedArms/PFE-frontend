import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View, ActivityIndicator } from "react-native";
import QuantityLine from "../../components/QuantityLine/QuantityLine";
import ButtonChoose from "../../components/button/ButtonChoose";

import { TourContext } from "../../contexts/TourContext";
import { UserContext } from "../../contexts/UserContext";
import { Tour } from "../../models/tour";
import { BoxeContext } from "../../contexts/BoxeContext";
import { Boxe } from "../../models/boxe";

const DelivererContentScreen: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const { id } = route.params;
  console.log("mon id ", id);

  const { user } = useContext(UserContext);
  const { getToursToday, setDelivererDB } = useContext(TourContext);
  const { getBoxeDeliverer } = useContext(BoxeContext);
  const [boxe, setBoxe] = useState<Boxe[]>([]);
  const [date, setDate] = useState<string>("");
  const [tour, setTour] = useState<Tour | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toursToday = await getToursToday();
        const fetchedTour = toursToday.find((tour) => tour.tour === id);
        const boxe = await getBoxeDeliverer(id);
        setTour(fetchedTour);
        setDate(fetchedTour?.date ?? "");
        setBoxe(boxe);
      } catch (error) {
        console.error("Error fetching toursToday:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getToursToday, id, getBoxeDeliverer]);

  if (loading) {
    // Render loading indicator while fetching data
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handlePress = async () => {
    await setDelivererDB(id, date, user?.user_id);
    navigation.navigate("DelivererTour");
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        Contenu de la tournée de {tour?.geo_zone} du{" "}
        {tour?.date ? new Date(tour?.date).toLocaleDateString() : ""}
      </Text>
      {boxe.map((boxeLine, index) => (
        <QuantityLine key={index} quantity={boxeLine.quantity} label={boxeLine.name} />
      ))}
      <View style={styles.btn}>
        <ButtonChoose
          valueString="Lancer la tournée"
          method={handlePress}
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
