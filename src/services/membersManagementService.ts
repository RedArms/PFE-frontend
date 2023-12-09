import API_URL from "../utils/config";
import axios, { AxiosError } from "axios";

async function verifyUser(id: number): Promise<boolean | undefined> {
    try {
        console.log(`${API_URL}/users/verify/1`);
        const response = await axios.post(`http://172.20.10.2:8080/users/verify/3`);
        console.log("TESTING");
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


export { verifyUser };
