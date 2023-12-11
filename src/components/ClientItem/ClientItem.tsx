import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Client } from '../../models/Client';

const ClientItem = ({ client }: { client: Client }) => {
	const navigation = useNavigation();

	const navigateToClientDetails = () => {
		navigation.navigate('ClientDetailsScreen', { client });
	};

	return (
		<TouchableOpacity onPress={navigateToClientDetails}>
			<View style={styles.clientItem}>
				<Text style={styles.clientText}>{client.name}</Text>
				<Ionicons name="settings" size={24} color="black" />
			</View>
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
	clientItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#007bff',
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

export default ClientItem;
