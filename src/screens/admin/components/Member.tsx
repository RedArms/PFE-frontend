import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Membre = ({
  role,
  prenom,
  nom,
  email,
  phoneNumber,
}: {
  role: string;
  prenom: string;
  nom: string;
  email: string;
  phoneNumber: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.fullName}>
          {prenom} {nom}
        </Text>
        <TouchableOpacity style={styles.iconButton} onPress={toggleExpand}>
          <Text style={styles.icon}>{expanded ? "-" : "+"}</Text>
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.details}>
          <Text style={styles.email}>E-mail : {email}</Text>
          <Text style={styles.phoneNumber}>Num. tél. :{phoneNumber}</Text>
          {role !== "admin" && (
            <TouchableOpacity style={styles.adminButton}>
              <Text style={styles.adminButtonText}>
                Passer en administrateur
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  role: {
    fontSize: 12,
    color: "#666",
  },
  fullName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconButton: {
    // Styles for the expand/collapse button
  },
  icon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    marginTop: 10,
  },
  email: {
    // Styles for the email
  },
  phoneNumber: {
    // Styles for the phone number
  },
  adminButton: {
    marginTop: 10,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  adminButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  // Add other styles as needed
});

export default Membre;
