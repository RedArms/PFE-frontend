import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import KeyboardAvoidingComponent from "../../../components/KeyboardAvoiding/KeyboardAvoiding";

const AddItemComponent: React.FC = () => {
  const [newItemLabel, setNewItemLabel] = useState("");
  const [newItemSize, setNewItemSize] = useState("");

  const onHandleAddItem = () => {
    // TODO call API to add item
    console.log('new item', {newItemLabel, newItemSize});
  }

  return (
    <KeyboardAvoidingComponent>

    
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Ajouter un nouvel article</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'article"
        value={newItemLabel}
        onChangeText={(text) => setNewItemLabel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Taille de l'article (optionnel)"
        value={newItemSize}
        onChangeText={(text) => setNewItemSize(text)}
      />
      <Button color="white"title="Ajouter l'article" onPress={onHandleAddItem} />
    </View>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    
    alignItems: "center",
    backgroundColor: "#124972",
    marginHorizontal: 2,
    borderRadius: 8,
    paddingVertical: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: "60%",
    backgroundColor: "white",
  },
});

export default AddItemComponent;
