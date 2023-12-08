import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Registration from "./components/Registration";
import Member from "./components/Member";

const AdminScreen: React.FC = () => {
  const registrations = [
    { name: "Alice", surname: "Dupont", id: "001" },
    { name: "Bob", surname: "Martin", id: "002" },
    { name: "Charlie", surname: "Durand", id: "003" },
  ];
  const members = [
    {
      id: "1",
      name: "Manuel",
      surname: "Bautista",
      email: "phillip18@green-turner.com",
      phoneNumber: "008-608-8036x6130",
      status: "admin",
    },
    {
      id: "2",
      name: "Jasmine",
      surname: "Cole",
      email: "davidanderson@reyes-davis.net",
      phoneNumber: "+1-032-995-2171",
      status: "admin",
    },
    {
      id: "3",
      name: "Jacqueline",
      surname: "Allen",
      email: "aimeejordan@yahoo.com",
      phoneNumber: "556.955.7984",
      status: "livreur",
    },
    {
      id: "4",
      name: "Billy",
      surname: "Vasquez",
      email: "gardnerstanley@holland.com",
      phoneNumber: "+1-703-749-5606x9979",
      status: "admin",
    },
    {
      id: "5",
      name: "Jonathan",
      surname: "Palmer",
      email: "frederickcody@hotmail.com",
      phoneNumber: "916-344-6011",
      status: "livreur",
    },
    {
      id: "6",
      name: "Heather",
      surname: "Hunt",
      email: "sharon03@gmail.com",
      phoneNumber: "482.517.0920x403",
      status: "livreur",
    },
    {
      id: "7",
      name: "Johnny",
      surname: "Aguilar",
      email: "david85@hotmail.com",
      phoneNumber: "+1-894-039-2806x293",
      status: "admin",
    },
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.top}>
        <Text style={styles.title}>Inscriptions en attente</Text>
        {registrations.length === 0 ? (
          <Text>Aucune inscription en attente</Text>
        ) : (
          registrations.map((registration) => (
            <Registration
              key={registration.id}
              name={registration.name}
              surname={registration.surname}
              id={registration.id}
            />
          ))
        )}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Gérer les membres</Text>
        {members.length === 0 ? (
          <Text>Aucun membre trouvé</Text>
        ) : (
          members.map((member) => (
            <Member
              key={member.id}
              role={member.status}
              prenom={member.name}
              nom={member.surname}
              email={member.email}
              phoneNumber={member.phoneNumber}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  top: {
    marginTop: 75,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
  },
  container: {
    // Conteneur pour tout le composant RegistrationPending
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
  },
  title: {
    // Style pour le titre
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  registration: {
    // Style pour chaque Registration (à définir plus tard)
    backgroundColor: "#e9e9e9",
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
  },
});

export default AdminScreen;
