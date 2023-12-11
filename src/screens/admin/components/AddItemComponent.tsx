import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import KeyboardAvoidingComponent from "../../../components/KeyboardAvoiding/KeyboardAvoiding";
import { Item } from "../../../models/Item";
import { createItem } from "../../../services/itemService";
import RNPickerSelect from "react-native-picker-select";

const AddItemComponent: React.FC<{ onAddItem: () => void }> = ({
  onAddItem,
}) => {
  const [newItemLabel, setNewItemLabel] = useState("");
  const [newItemSize, setNewItemSize] = useState("");

  const [pickerKey, setPickerKey] = useState(0); // key for reseting the picker

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
      setPickerKey((prevKey) => prevKey + 1);
      onAddItem();
    }
  };

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Ajouter un nouvel article</Text>
        <View style={styles.inputContainer}>
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
        </View>
        <Button
          color="white"
          title="Ajouter"
          onPress={onHandleAddItem}
        />
      </View>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#124972",
    marginHorizontal: 2,
    borderRadius: 8,
    paddingVertical: 10,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row", //
    alignItems: "center",
    marginBottom: 5,
    padding: 10,
  },
  input: {
    flex: 1, // Utilise tout l'espace disponible
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "white",
    marginRight: 10,
  },
  pickerContainer: {
    width: "35%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 8,
    borderColor: "gray",
  },
});

export default AddItemComponent;
