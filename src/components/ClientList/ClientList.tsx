import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getAllClients } from '../../services/clientService';
import ClientItem from '../ClientItem/ClientItem';
import { Client } from '../../models/Client';
import AddClientModal from '../AddClientModal/AddClientModal';

const ClientList = () => {
  const isFocused = useIsFocused();
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchClients();
  }, [isFocused]);

  const fetchClients = async () => {
    const clients = await getAllClients();
    setClients(clients);
  };

  const handleAddClientPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Clients</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
    justifyContent: 'center',
    marginTop: 75,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    height: '85%',
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  header: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 10,
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
