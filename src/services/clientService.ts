import { Client } from "../models/Client";
import { RegularOrder } from "../models/RegularOrder";
import API_URL from "../utils/config";
import axios from "axios";

async function getAllClients(): Promise<Client[]> {
  try {
    const response = await axios.get(`${API_URL}/clients/`);

    if (response.status !== 200) {
      throw new Error("Failed to get clients");
    }
    const clients = response.data;

    return clients;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);

    return [];
  }
}

async function createClient(client: {name: String, address: String}): Promise<Client> {
  try {
    const response = await axios.post(`${API_URL}/clients/`, client);

    if (response.status !== 200) {
      throw new Error("Failed to create client");
    }

    const createdClient = response.data;

    return createdClient;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);

    return {} as Client;
  }
}

async function updateClient(client: Client): Promise<Client> {
  try {
    const response = await axios.put(`${API_URL}/clients/${client.client_id}`, client);

    if (response.status !== 200) {
      return client;
    }

    const updatedClient = response.data;

    return updatedClient;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);

    return client;
  }
}

async function deleteClient(client: Client): Promise<Client> {
  try {
    const response = await axios.delete(`${API_URL}/clients/${client.client_id}`);

    if (response.status !== 200) {
      throw new Error("Failed to delete client");
    }

    const deletedClient = response.data;
    return deletedClient;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);
    return client;
  }
}

async function getOrder(client: Client): Promise<RegularOrder> {
  try {
    const response = await axios.get(`${API_URL}/clients/orders/${client.client_id}`);

    if (response.status !== 200) {
      throw new Error("Failed to get orders");
    }

    const orders: RegularOrder = response.data;

    return orders;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);

    return {} as RegularOrder;
  }
}

async function updateOrder(client: Client, order: RegularOrder): Promise<RegularOrder> {
  try {
    const response = await axios.put(`${API_URL}/clients/orders/${client.client_id}`, order);

    if (response.status !== 200) {
      throw new Error("Failed to update order");
    }

    const updatedOrder: RegularOrder = response.data;

    return updatedOrder;
  } catch (error) {
    console.log("Une erreur s'est produite :", error);

    return order;
  }
}

export { getAllClients, createClient, updateClient, deleteClient, getOrder, updateOrder };