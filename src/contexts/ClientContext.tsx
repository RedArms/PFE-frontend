import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../utils/config";
import { Tour } from "../models/tour";
import { Client } from "../models/client";

interface ClientContextProps {
    getClients: (id: number) => Promise<Client[]>;
}

const ClientContext = createContext<ClientContextProps>({
    getClients: (id: number) => Promise.resolve([]),
});

const ClientContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [clients, setClients] = useState<Client[]>([]);

    const getClients = async (id: number): Promise<Client[]> => {
        if (clients.length === 0) {
            try {
                const response = await axios.get(
                    API_URL + `/tours/getTours/${id}/getAllClient`
                );
                setClients(response.data);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        }

        console.log(clients);
        return clients;
    };

    const exposedValue: ClientContextProps = {
        getClients,
    };

    return (
        <ClientContext.Provider value={exposedValue}>
            {children}
        </ClientContext.Provider>
    );
};

export { ClientContext, ClientContextProvider };
