import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback, Modal, TouchableOpacity, TextInput, Button } from 'react-native';
import styles from './CrecheLineStyle';
import ButtonChoose from '../button/ButtonChoose';

interface Article {
  name: string;
  quantity: number;
}

interface Props {
  creche: string;
  article: Article[];
}

const CrecheLine: React.FC<Props> = ({ creche, article }) => {
  const [isArticleVisible, setisArticleVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedArticles, setEditedArticles] = useState([...article]);

  const toggleArticleVisible = () => {
    setisArticleVisible(!isArticleVisible);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    // Handle save logic, e.g., update the state or send data to the server
    console.log('Save clicked', editedArticles);
    closeModal();
  };

  const handleQuantityChange = (index: number, newQuantity: string) => {
    const updatedArticles = [...editedArticles];
    updatedArticles[index].quantity = parseInt(newQuantity, 10) || 0;
    setEditedArticles(updatedArticles);
  };

  return (
    <ScrollView>
      <View style={styles.toursChooseLine}>
        <TouchableWithoutFeedback onPress={toggleArticleVisible}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>{creche}</Text>
          </View>
        </TouchableWithoutFeedback>

        {isArticleVisible && (
          <View style={styles.AllArticleContainer}>
            <ScrollView style={{ ...styles.crecheContainer }}>
              {article.map((articleLine, index) => (
                <Text style={styles.crecheLine} key={index}>
                  {articleLine.name} : {articleLine.quantity}
                </Text>
              ))}
            </ScrollView>
            <ButtonChoose valueString="Marquer comme livrée" method={openModal} />

            {/* Modal for editing quantities */}
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
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CrecheLine;
