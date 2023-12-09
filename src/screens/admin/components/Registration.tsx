import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Registration = ({
  name,
  surname,
  id,
  onAccept,
  onReject,
}: {
  name: string;
  surname: string;
  id: string;
  onAccept: () => void;
  onReject: () => void;
}) => {
  // Fonctions pour gérer les clics sur les boutons (à définir)
  const handleAccept = () => {
    console.log(`Accepted registration with ID: ${id}`);
  };

  const handleReject = () => {
    console.log(`Rejected registration with ID: ${id}`);
  };

  return (
    <View style={styles.registration}>
      <Text style={styles.registrationText}>
        {id} : {name} {surname}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onAccept} style={styles.button}>
          <Text style={styles.acceptText}>V</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReject} style={styles.button}>
          <Text style={styles.rejectText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registration: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e9e9e9",
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
  },
  registrationText: {
    // Styles pour le texte de l'inscription
  },
  buttons: {
    // Conteneur pour les boutons
    flexDirection: "row",
  },
  button: {
    // Styles généraux pour les boutons
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#ccc", // Utiliser des couleurs différentes si nécessaire
  },
  acceptText: {
    // Styles pour le texte du bouton accepter
    color: "green",
  },
  rejectText: {
    // Styles pour le texte du bouton rejeter
    color: "red",
  },
});

export default Registration;
