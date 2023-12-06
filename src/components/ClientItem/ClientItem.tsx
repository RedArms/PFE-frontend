// ClientItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ClientItem = ({ name }: { name: string }) => {
    const styles = StyleSheet.create({
        clientItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#007AFF',
            borderRadius: 10,
            marginVertical: 10,
            marginHorizontal: 20,
            padding: 20,
        },
        clientText: {
            color: 'white',
            fontSize: 18,
        }
    });

    return (
        <View style={styles.clientItem}>
            <Text style={styles.clientText}>{name}</Text>
            <Ionicons name="md-settings" size={24} color="black" />
        </View>
    )
};

export default ClientItem;
