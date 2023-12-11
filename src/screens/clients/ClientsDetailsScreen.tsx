import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import OrderList from '../../components/OrderList/OrderList';
import ActionButton from '../../components/ActionButton/ActionButton';
import { Client } from '../../models/Client';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_URL } from '@env';

const ClientDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { client } = route.params as { client: Client};

  const handleDeletePress = () => {
    Alert.alert(
      "Supprimer le client",
      "Êtes-vous sûr de vouloir supprimer ce client ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        { 
          text: "Supprimer", 
          onPress: async () => {
            await axios.delete(`${API_URL}/client/${client.client_id}`)
              .catch(error => {
                console.error(error);
              });
            navigation.goBack();
          } 
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nom : {client.name}</Text>
      <Text style={styles.subtitle}>Adresse : {client.address}</Text>
      <OrderList client={client} />
      <ActionButton title="Supprimer le client" color="#D9534F" onPress={handleDeletePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default ClientDetailsScreen;
