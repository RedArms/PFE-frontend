import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { UserContext } from "../../contexts/UserContext";

const Profile: React.FC = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Votre Profil</Text>

      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.field}>{user?.first_name}</Text>

        <Text style={styles.label}>Prénom:</Text>
        <Text style={styles.field}>{user?.last_name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.field}>{user?.email}</Text>

        <Text style={styles.label}>Téléphone:</Text>
        <Text style={styles.field}>{user?.phone}</Text>

        <Text style={styles.label}>Type d'utilisateur:</Text>
        <Text style={styles.field}>
          {user?.is_admin ? "Administrateur" : "Livreur"}
        </Text>
      </View>

      <Button title="Se Déconnecter" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "60%",
    marginTop: 40,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  profileInfo: {
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: "gray",
    marginBottom: 4,
  },
  field: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default Profile;
