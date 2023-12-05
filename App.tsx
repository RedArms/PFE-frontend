import React from "react";

// index.tsx is the entry point for the navigation folder 
import Navigation from "./src/navigation"; 
import { UserContextProvider } from "./src/contexts/UserContext";
const App: React.FC = () => {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
};

export default App;
