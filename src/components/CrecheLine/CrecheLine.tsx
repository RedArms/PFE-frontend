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
} from "react-native";
import styles from "./CrecheLineStyle";
import ButtonChoose from "../button/ButtonChoose";
import { Client } from "../../models/Client";
import { ItemWithQuantity } from "../../models/Item";
import { getBoxForClientInAtour } from "../../services/boxeService";
import { Boxe } from "../../models/boxe";
import CrecheBoxeRequested from "./CrecheBoxeRequested";

const CrecheLine: React.FC<{
  creche: Client;
  onHandleIndicateToDelivered: () => void;
  idTour: number;
  date: string;
}> = ({ creche, idTour, date }) => {
  const [isItemVisible, setisItemVisible] = useState(false);
  //const [modalVisible, setModalVisible] = useState(false);
  //const [editedArticles, setEditedArticles] = useState(undefined as Article[] | undefined);

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
    console.log(itemsRequested);
  }, [isItemVisible]);

  /*  const openModal = () => {
    setModalVisible(true);
  }; */

  /*  const closeModal = () => {
    setModalVisible(false);
  }; */

  /*   const handleSave = () => {
    // Handle save logic, e.g., update the state or send data to the server
    console.log('Save clicked', editedArticles);
    closeModal();
  }; */

  /*   const handleQuantityChange = (index: number, newQuantity: string) => {
    const updatedArticles = [...editedArticles];
    updatedArticles[index].quantity = parseInt(newQuantity, 10) || 0;
    setEditedArticles(updatedArticles);
  }; */

  return (
    <ScrollView>
      <View style={styles.toursChooseLine}>
        <TouchableWithoutFeedback onPress={toggleItemVisible}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>{creche.name}</Text>
          </View>
        </TouchableWithoutFeedback>

        {isItemVisible && (
          <View style={styles.AllArticleContainer}>
            <ScrollView style={{ ...styles.crecheContainer }}>
              {itemsRequested.map((boxe, index) => (

                <CrecheBoxeRequested key={index} boxe={boxe} />
              ))}
            </ScrollView>
            {/* <ButtonChoose
              valueString="Marquer comme livrée"
              method={openModal}
            /> */}
          </View>
        )}

        {/* Modal for editing quantities 
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
              <View style={styles.modalContainer}>
                <ScrollView style={styles.modalContent}>
                  {editedArticles.map((articleLine, index) => (
                    <View style={styles.modalArticleLine} key={index}>
                      <Text>{articleLine.name}</Text>
                      <TextInput
                        style={styles.quantityInput}
                        keyboardType="numeric"
                        value={articleLine.quantity.toString()}
                        onChangeText={(newQuantity) => handleQuantityChange(index, newQuantity)}
                      />
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                  <Button title="Save" onPress={handleSave} />
                </View>
              </View>
            </Modal>
          </View>*/}
      </View>
    </ScrollView>
  );
};

export default CrecheLine;
