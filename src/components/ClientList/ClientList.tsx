import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getAllClients } from '../../services/clientService';
import ClientItem from '../ClientItem/ClientItem';
import { Client } from '../../models/Client';
import AddClientModal from '../AddClientModal/AddClientModal';

const ClientList = () => {
  const navigation = useNavigation();
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      fetchClients();
    });

    return focusListener;
  }, []);

  const fetchClients = async () => {
    const clients = await getAllClients();
    setClients(clients);
  };

  const handleAddClientPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>Clients</Text>
        {clients.map((client, index) => (
          <ClientItem key={index} client={client} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddClientPress}>
        <Ionicons name="person-add" size={35} color="white" />
      </TouchableOpacity>
      <AddClientModal visible={isModalVisible} fetchClients={fetchClients} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  scrollViewContent: {
    paddingBottom: 80, // Ajoutez de l'espace au bas de la ScrollView
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: 'green',
    borderRadius: 50,
  },
});

export default ClientList;
