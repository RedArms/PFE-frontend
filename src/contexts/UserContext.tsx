import React, { createContext, useState } from "react";
import { saveUser , deleteUser as removeFromStorage , getUser } from "../utils/auth";
import { User } from "../models/user";


interface UserContextProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (user: User) => void;
  logout: () => void;
  user?: User;
}
const UserContext = createContext<UserContextProps>({
  isAuthenticated: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
  user: undefined,
});


const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    
    removeFromStorage();

  };

  const login = async (user: User) => {
    try {
      saveUser(user);
      setIsAuthenticated(true);
      setIsAdmin(user.isAdmin);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const getUserInformation = async (): Promise<User | null> => {
    try {
      const user = await getUser();
      return user;
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  };

  const exposedValue: UserContextProps = {
    isAuthenticated,
    isAdmin,
    login,
    logout,
  };


  

  return (
    <UserContext.Provider value={exposedValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
