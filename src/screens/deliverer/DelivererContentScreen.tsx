import React, { useContext, useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import QuantityLine from "../../components/QuantityLine/QuantityLine";
import ButtonChoose from "../../components/button/ButtonChoose";
import { BoxeContext } from "../../contexts/BoxeContext";
import { Boxe } from "../../models/boxe";
import { TourContext } from "../../contexts/TourContext";
import API_URL from "../../utils/config";
import { UserContext } from "../../contexts/UserContext";

interface DelivererContentScreenProps {
  route: {
    params: {
      id: number;
    };
  };
  navigation: any; 
}

const DelivererContentScreen: React.FC<DelivererContentScreenProps> = ({
  route,
  navigation,
}) => {
  const { id } = route.params;
  const { user } = useContext(UserContext);
  const { getToursToday, setDelivererDB } = useContext(TourContext);

  const [boxeData, setBoxeData] = useState<Boxe[]>([]);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boxe = await getToursToday();
        const boxeId = boxe.find((tour) => tour.tour === id);
        setDate(boxeId?.date ?? "");
        setBoxeData(boxeId?.content ?? []);

      } catch (error) {
        console.error("Error fetching boxe:", error);
      }
    };

    fetchData();
  }, [getToursToday, id]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Contenu de la tournée X</Text>
      {boxeData.map((boxe, index) => (
        <QuantityLine key={index} quantity={boxe.quantity} label={boxe.name} />
      ))}
      <ButtonChoose
        valueString="Valider la tournée"
        method={async () => {
          await setDelivererDB(id, date, user?.user_id);
          navigation.navigate("DelivererTours", { id: id }); // TODO: change to id
        }}
      />
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
