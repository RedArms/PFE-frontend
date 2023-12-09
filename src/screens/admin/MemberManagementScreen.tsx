import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Registration from "./components/Registration";
import Member from "./components/Member";
import { verifyUser } from "../../services/membersManagementService";

const AdminScreen: React.FC = () => {
  const [registrations, setRegistrations] = useState([
    {
      id: 8,
      name: "Alice",
      surname: "Dupont",
      email: "alice.dupont@example.com",
      phoneNumber: "0123-456-789",
    },
    {
      id: 9,
      name: "Bob",
      surname: "Martin",
      email: "bob.martin@example.com",
      phoneNumber: "0234-567-890",
    },
    {
      id: 10,
      name: "Charlie",
      surname: "Durand",
      email: "charlie.durand@example.com",
      phoneNumber: "0345-678-901",
    },
  ]);

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Manuel",
      surname: "Bautista",
      email: "phillip18@green-turner.com",
      phoneNumber: "008-608-8036x6130",
      status: "admin",
    },
    {
      id: 2,
      name: "Jasmine",
      surname: "Cole",
      email: "davidanderson@reyes-davis.net",
      phoneNumber: "+1-032-995-2171",
      status: "admin",
    },
    {
      id: 3,
      name: "Jacqueline",
      surname: "Allen",
      email: "aimeejordan@yahoo.com",
      phoneNumber: "556.955.7984",
      status: "livreur",
    },
    {
      id: 4,
      name: "Billy",
      surname: "Vasquez",
      email: "gardnerstanley@holland.com",
      phoneNumber: "+1-703-749-5606x9979",
      status: "admin",
    },
    {
      id: 5,
      name: "Jonathan",
      surname: "Palmer",
      email: "frederickcody@hotmail.com",
      phoneNumber: "916-344-6011",
      status: "livreur",
    },
    {
      id: 6,
      name: "Heather",
      surname: "Hunt",
      email: "sharon03@gmail.com",
      phoneNumber: "482.517.0920x403",
      status: "livreur",
    },
    {
      id: 7,
      name: "Johnny",
      surname: "Aguilar",
      email: "david85@hotmail.com",
      phoneNumber: "+1-894-039-2806x293",
      status: "admin",
    },
  ]);

  const handleAcceptRegistration = (id: number) => {
    // Trouver l'inscription à accepter
    const registration = registrations.find((reg) => reg.id === id);

    // Mettre à jour la liste des inscriptions
    setRegistrations(registrations.filter((reg) => reg.id !== id));

    // Ajouter le membre à la liste des membres avec le rôle 'livreur'
    if (registration) {
      setMembers([
        ...members,
        {
          ...(registration as {
            id: number;
            name: string;
            surname: string;
            email: string;
            phoneNumber: string;
            status: string;
          }),
          status: "livreur",
        },
      ]);
    }
    verifyUser(id);
  };

  const handleRejectRegistration = (id: number) => {
    // Simplement retirer l'inscription de la liste
    setRegistrations(registrations.filter((reg) => reg.id !== id));
  };

  const setAdmin = (id: number) => {
    // Mettre à jour la liste des membres
    setMembers(
      members.map((m) => (m.id === id ? { ...m, status: "admin" } : m))
    );
  };

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
              onAccept={() => handleAcceptRegistration(registration.id)}
              onReject={() => handleRejectRegistration(registration.id)}
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
              onSetAdmin={() => setAdmin(member.id)}
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
