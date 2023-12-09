import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Registration from "./components/Registration";
import Member from "./components/Member";
import { User } from "../../models/user";
import {
  verifyUser as verifyUserApi,
  revokeUser as revokeUserApi,
  setAdmin as setAdminApi,
  getAllUsers as getAllUsersApi,
} from "../../services/membersManagementService";

const MembersManagementService: React.FC = () => {
  const [registrations, setRegistrations] = useState<User[]>([]);
  const [members, setMembers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getAllUsersApi();
        const newRegistrations = allUsers.filter(
          (user: User) => !user.is_verified
        );
        const newMembers = allUsers.filter((user: User) => user.is_verified);

        setRegistrations(newRegistrations);
        setMembers(newMembers);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleAcceptRegistration = (id: number) => {
    // Trouver l'inscription à accepter
    const registration = registrations.find((reg) => reg.user_id === id);

    // Mettre à jour la liste des inscriptions
    setRegistrations(registrations.filter((reg) => reg.user_id !== id));

    // Ajouter le membre à la liste des membres avec le rôle 'livreur'
    if (registration) {
      setMembers([
        ...members,
        { ...registration, is_verified: true, is_admin: false },
      ]);
    }
    verifyUserApi(id);
  };

  const handleRejectRegistration = (id: number) => {
    revokeUserApi(id);
    setRegistrations(registrations.filter((reg) => reg.user_id !== id));
  };

  const setAdmin = (id: number) => {
    setAdminApi(id);
    setMembers(
      members.map((m) => {
        if (m.user_id === id) {
          return { ...m, is_admin: true };
        }
        return m;
      })
    );
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.top}>
        <Text style={styles.title}>Inscriptions en attente</Text>
        {registrations.map((registration) => (
          <Registration
            key={registration.user_id}
            name={registration.last_name}
            surname={registration.first_name}
            id={registration.user_id || 0}
            onAccept={() =>
              registration.user_id &&
              handleAcceptRegistration(registration.user_id)
            }
            onReject={() =>
              registration.user_id &&
              handleRejectRegistration(registration.user_id)
            }
          />
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Gérer les membres</Text>
        {members.map((member) => (
          <Member
            key={member.user_id}
            role={member.is_admin ? "admin" : "livreur"}
            prenom={member.last_name}
            nom={member.first_name}
            email={member.email}
            phoneNumber={member.phone}
            onSetAdmin={() => member.user_id && setAdmin(member.user_id)}
          />
        ))}
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

export default MembersManagementService;
