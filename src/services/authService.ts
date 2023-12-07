import { User } from "../models/user";
import API_URL from "../utils/config";
import axios from "axios";

async function login(
  email: string,
  password: string
): Promise<User | undefined> {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const userString = response.data;

    // convert userString to User object the attribute names are the same

    const user: User = {
      email: userString.email,
      first_name: userString.first_name,
      is_admin: userString.is_admin,
      is_delivery_person: userString.is_delivery_person,
      is_verified: userString.is_verified,
      last_name: userString.last_name,
      phone: userString.phone,
      user_id: userString.user_id,
    };
    console.log(user.email);

    return user;
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
   
    return undefined;
  }
}

export { login };
