import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { User } from "../../models/user";
import { register as registerAPI } from "../../services/authService";
import Logo from "../../components/Logo/Logo";
const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    Alert.alert(
      "Inscription",
      "Voulez-vous vraiment vous inscrire ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Confirmer",
          onPress: async () => {
            // si l'utilisateur confirme l'inscription
           
            console.log("inscription en cours");
            
            const user: User = {
              first_name: firstname,
              last_name: lastname,
              email,
              password,
              phone,
            };

            // appel à service d'authentification

            const idUserCreated = await registerAPI(user);
            if (idUserCreated) {
              // si l'utilisateur est créé
              navigation.navigate("Login");
            } else {
              alert("Erreur lors de l'inscription");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Logo width={175} height={175}/>
      <Text style={styles.title}>Inscrivez-vous</Text>
      <TextInput
        style={styles.input}
        placeholder="Prenom"
        onChangeText={(text) => setFirstname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(text) => setLastname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="S'inscrire" onPress={handleRegister} />

      <Text>
        Vous avez déjà un compte ? Cliquez ici
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Se connecter
        </Text>
      </Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:10
  },

});

export default RegisterScreen;
