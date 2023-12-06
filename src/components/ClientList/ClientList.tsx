// ClientList.tsx
import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ClientItem from '../ClientItem/ClientItem';

const ClientList = () => {
    const clients = ['Mangi lakilot', 'Mangon pas likot', 'creche kilot', 'Mangi lakilot', 'Mangon pas likot', 'creche kilot', 'Mangi lakilot', 'Mangon pas likot', 'creche kilot'];

    const styles = StyleSheet.create({
        container: {
            marginTop: 50,
        },
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            padding: 20,
            backgroundColor: '#F5F5F5',
        },
        addButton: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            backgroundColor: 'green',
            borderRadius: 25,
            marginHorizontal: 20,
            marginVertical: 10,
        },
        addButtonText: {
            color: 'white',
            fontSize: 18,
        },
    });
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Clients</Text>
            {clients.map((client, index) => (
            <ClientItem key={index} name={client} />
            ))}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Ajouter</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default ClientList;
