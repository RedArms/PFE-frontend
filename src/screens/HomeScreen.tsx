import React, { useState } from "react";
import{useFocusEffect} from '@react-navigation/native';

import { View, Text, Button, StyleSheet } from "react-native";

import { User } from "../models/user";
import { getUser, deleteUser } from "../services/auth";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [user, setUser] = useState<User | null>(null);

  // de react navigation pour faire des actions quand on arrive sur l'écran, ici on va chercher l'utilisateur
  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => {
        const fetchedUser = await getUser();
        setUser(fetchedUser);
      };
      fetchUser();
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>

      {user ? (
        <View style={styles.userContainer}>
          <Text style={styles.welcomeText}>Welcome {user.username}!</Text>
          <Button
            title="Delete account"
            onPress={() => {
              deleteUser();
              setUser(null);
            }}
          />
        </View>
      ) : (
        <Text style={styles.notLoggedInText}>Vous n'êtes pas connecté!</Text>
      )}

      <Button
        title="Go to ScreenTwo"
        onPress={() => navigation.navigate("ScreenTwo")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
    },
    userContainer: {
      marginBottom: 16,
    },
    welcomeText: {
      fontSize: 18,
      marginBottom: 8,
    },
    notLoggedInText: {
      fontSize: 18,
    },
  });
  
export default HomeScreen;
