import API_URL from "../utils/config";
import axios from "axios";

async function login(
  email: string,
  password: string
): Promise<String | undefined> {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const userString = response.data;

    return userString;
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    //console.error("Détails de l'erreur :", error.response || error.message || error);
    return undefined;
  }
}

export { login };
