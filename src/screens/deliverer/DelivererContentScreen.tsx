import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import QuantityLine from "../../components/QuantityLine/QuantityLine";
import ButtonChoose from "../../components/button/Button";

const DelivererContentScreen : React.FC<{ route: any , navigation : any}> = ({route,navigation}) => {

  const { id } = route.params;
  console.log(id);
  let  queryResult = [
    {
      label:"lange S",
      quantity: 42
    },
    {
      label:"lange M",
      quantity: 432
    },
    {
      label:"lange L",
      quantity: 21
    },

  ]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
          Contenu de la tournée X
      </Text>
      {
        queryResult.map((result, index) => (
          <QuantityLine
            key={index}
            value={result}/>
        ))
      }
      <ButtonChoose valueString="Valider la tournée" method={() => {
        navigation.navigate('DelivererTours',{id: 'toto'}); // TODO: change to id
        }}/>
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
