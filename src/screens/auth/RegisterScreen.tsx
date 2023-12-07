import React, { useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import { User } from "../../models/user";
import { register as registerAPI } from "../../services/authService";

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("Login");
  };

  const handleRegister = async () => {
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
      setModalVisible(true);
    } else {
      alert("Erreur lors de l'inscription");
    }

  };

  return (
    <View style={styles.container}>
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

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Bienvenue {firstname}, nous vous enverrons un mail lorsque nous
              validerons votre inscription!
            </Text>
            <Button title="Fermer" onPress={closeModal} />
          </View>
        </View>
      </Modal>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default RegisterScreen;
