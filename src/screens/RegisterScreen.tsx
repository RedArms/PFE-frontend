import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import { User } from "../models/user";
import { saveUser } from "../services/auth";
const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("Home");
  };

  const handleRegister = async () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    const user: User = { username: username, email: email, password: password };

    await saveUser(user);

    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Register" onPress={handleRegister} />

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Bienvenue {username} !</Text>
            <Button title="Close" onPress={closeModal} />
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
