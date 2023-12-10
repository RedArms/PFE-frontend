import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import KeyboardAvoidingComponent from "../../../components/KeyboardAvoiding/KeyboardAvoiding";
import { Item } from "../../../models/item";
import { createItem } from "../../../services/itemService";
import RNPickerSelect from "react-native-picker-select";

const AddItemComponent: React.FC = () => {
  const [newItemLabel, setNewItemLabel] = useState("");
  const [newItemSize, setNewItemSize] = useState("");

  const [pickerKey, setPickerKey] = useState(0); // key for reseting the picker
  const resetPicker = () => {
    setNewItemSize("");
    // Augmenter la clé pour forcer la mise à jour du composant
    setPickerKey((prevKey) => prevKey + 1);
  };

  const onHandleAddItem = async () => {
    if (newItemLabel === "") return alert("Veuillez saisir un nom d'article");
    const newItem: Item = {
      label: newItemLabel,
      size: newItemSize === "" ? undefined : newItemSize,
    };

    const itemCreated = await createItem(newItem);
    if (itemCreated) {
      setNewItemLabel("");
      setNewItemSize("");
      resetPicker();
    }
  };

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
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            key={pickerKey}
            placeholder={{ label: "Taille (Optionel)", value: "" }}
            onValueChange={(size) => setNewItemSize(size)}
            items={[
              { label: "S", value: "S" },
              { label: "M", value: "M" },
              { label: "L", value: "L" },
              { label: "XL", value: "XL" },
            ]}
          />
        </View>
        <Button
          color="white"
          title="Ajouter l'article"
          onPress={onHandleAddItem}
        />
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
  pickerContainer: {
    width: "60%",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  picker: {
    height: 40,
    color: "black",
    alignSelf: "stretch",
  },
});

export default AddItemComponent;
