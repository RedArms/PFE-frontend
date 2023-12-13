import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import styles from "./CrecheLineStyle";
import ButtonChoose from "../button/ButtonChoose";
import { Client } from "../../models/Client";

import { getBoxForClientInAtour } from "../../services/boxeService";
import { Boxe } from "../../models/boxe";
import CrecheBoxeRequested from "./CrecheBoxeRequested";
import { Ionicons } from "@expo/vector-icons";

const CrecheLine: React.FC<{
  creche: Client;
  onCrecheDelivered: () => void;
  idTour: number;
  date: string;
}> = ({ creche, idTour, date, onCrecheDelivered }) => {
  const [isItemVisible, setisItemVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedArticles, setEditedArticles] = useState<Boxe[]>([]);

  const [itemsRequested, setItemsRequested] = useState<Boxe[]>([]);

  const toggleItemVisible = () => {
    setisItemVisible(!isItemVisible);
  };

  React.useEffect(() => {
    const fetchBox = async () => {
      const fetchedBox = await getBoxForClientInAtour(
        creche.client_id,
        idTour,
        date
      );
      if (fetchedBox === undefined) {
        return;
      }
      setItemsRequested(fetchedBox);
    };
    fetchBox();
  }, [isItemVisible]);

  const openModal = () => {
    setEditedArticles(itemsRequested);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    // Handle save logic, e.g., update the state or send data to the server
    console.log("Save clicked", editedArticles);
    closeModal();
    onCrecheDelivered();
  };

  const handleQuantityChange = (index: number, newQuantity: string) => {
    const updatedArticles = [...editedArticles];
    updatedArticles[index].quantity = parseInt(newQuantity, 10) || 0;
    setEditedArticles(updatedArticles);
  };
  return (
    <View style={{borderWidth:1 , marginBottom : 10 , borderRadius :10  }}>
      <TouchableWithoutFeedback onPress={toggleItemVisible}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" , textAlign: 'center' }}>
            {creche.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {isItemVisible && (
        <View style={styles.AllArticleContainer}>
          <ScrollView style={{ ...styles.crecheContainer }}>
            {itemsRequested.map((boxe, index) => (
              <CrecheBoxeRequested key={index} boxe={boxe} />
            ))}
          </ScrollView>
          <Button title="Marquer comme livrée" onPress={openModal} />
          {/* <ButtonChoose
              valueString="Marquer comme livrée"
              method={openModal}
            /> */}
        </View>
      )}

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styless.popupContainer}>
          <View style={styless.popupContent}>
            <View style={styless.popupHeader}>
              <Text style={styless.popupTitle}>
                Confirmer les quantitées livrée
              </Text>
              <TouchableOpacity onPress={closeModal} style={styless.popupClose}>
                <Ionicons name="close" size={40} color="red" />
              </TouchableOpacity>
            </View>

            <ScrollView >
              {editedArticles.map((boxe, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold" , fontSize : 10 }}>{boxe.name}</Text>

                  <TextInput
                    style={{
                      flex: 1,
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      marginBottom: 10,
                      paddingLeft: 10,
                    }}
                    keyboardType="numeric"
                    onChangeText={(text) => handleQuantityChange(index, text)}
                    value={boxe.quantity.toString()}
                    returnKeyLabel="valider"
                    returnKeyType="done"
                  />
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styless.addButton}
              onPress={() => {
                alert("OK !");
                handleSave();
              }}
            >
              <Text style={styless.addButtonText}>Confirmer livraison</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styless = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    width: 325,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  popupHeader: {
    flexDirection: "row",
    marginBottom: 10,
  },
  popupClose: {
    position: "absolute",
    top: -9,
    right: -9,
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },

  addButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
});
export default CrecheLine;
