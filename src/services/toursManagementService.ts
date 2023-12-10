import API_URL from "../utils/config";
import axios, { AxiosError } from "axios";


async function getTour(id: number): Promise<any | undefined> {
    try {
      console.log(`${API_URL}/tours/${id}`);
      const response = await axios.get(`${API_URL}/tours/${id}`);
  
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Erreur axios détectée :", error.message);
        if (error.response) {
          console.error("Réponse d'erreur :", error.response.data);
        }
      } else {
        console.error("Erreur générale :", error);
      }
    }
    return undefined;
  }

async function getAllTours(): Promise<any | undefined> {
    try {
      console.log(`${API_URL}/tours`);
      const response = await axios.get(`${API_URL}/tours`);
  
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Erreur axios détectée :", error.message);
        if (error.response) {
          console.error("Réponse d'erreur :", error.response.data);
        }
      } else {
        console.error("Erreur générale :", error);
      }
    }
    return undefined;
  }
  
  async function getAllToursToday(): Promise<any | undefined> {
    try {
      console.log(`${API_URL}/tours/toursToday`);
      const response = await axios.get(`${API_URL}/tours/toursToday`);
  
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Erreur axios détectée :", error.message);
        if (error.response) {
          console.error("Réponse d'erreur :", error.response.data);
        }
      } else {
        console.error("Erreur générale :", error);
      }
    }
    return undefined;
  }

export { getAllTours,getAllToursToday};
