import React from "react";

// index.tsx is the entry point for the navigation folder 
import Navigation from "./src/navigation"; 
import { UserContextProvider } from "./src/contexts/UserContext";
import { TourContextProvider } from "./src/contexts/TourContext";
import { ClientContextProvider } from "./src/contexts/ClientContext";
const App: React.FC = () => {
  return (
    <UserContextProvider>
      <ClientContextProvider>
        <TourContextProvider>
          <Navigation />
        </TourContextProvider>
      </ClientContextProvider>
    </UserContextProvider>
  );
};

export default App;
