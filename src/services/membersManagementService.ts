import API_URL from "../utils/config";
import axios, { AxiosError } from "axios";

async function verifyUser(id: number): Promise<boolean | undefined> {
  try {
    console.log(`${API_URL}/users/verify/${id}`);
    const response = await axios.post(`${API_URL}/users/verify/${id}`);
    console.log("WE DID IT");
    console.log(response.data);
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

async function revokeUser(id: number): Promise<boolean | undefined> {
  try {
    console.log(`${API_URL}/users/revoke/${id}`);
    const response = await axios.delete(`${API_URL}/users/revoke/${id}`);

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


export { verifyUser, revokeUser };
