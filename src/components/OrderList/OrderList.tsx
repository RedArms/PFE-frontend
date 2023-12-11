import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ActionButton from '../ActionButton/ActionButton';
import OrderItem from '../OrderItem/OrderItem';
import { RegularOrder } from '../../models/RegularOrder';
import axios from 'axios';
import { Client } from '../../models/Client';
import { API_URL } from '@env';

interface OrderListProps {
  client: Client;
}

const OrderList: React.FC<OrderListProps> = ({client}) => {
  const [order, setOrder] = useState<RegularOrder>({regular_order_lines: []});
  const [orderChanged, setOrderChanged] = useState<boolean>(false);

  const setOrderWithChangeTracking = (newOrder: RegularOrder) => {
    setOrder(newOrder);
    setOrderChanged(true);
  };

  const handleChangeButtonPress = () => {
    console.warn('Updating order...');
    axios.put(`${API_URL}/client/orders/${client.client_id}`, order)
      .then(response => {
        console.log(response.data);
        fetchOrder();
        setOrderChanged(false);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const fetchOrder = () => {
    axios.get(`${API_URL}/client/orders/${client.client_id}`)
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={order.regular_order_lines}
        renderItem={({ item }) => <OrderItem orderLine={item} order={order} setOrder={setOrderWithChangeTracking} />}
        keyExtractor={(item, index) => index.toString()}
      />
      {orderChanged && <ActionButton title="Mettre à jour les quantités" color="#5CB85C" onPress={handleChangeButtonPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    padding: 10,
    paddingLeft: 20,
    paddingEnd: 20,
    borderRadius: 10,
  },
});

export default OrderList;
