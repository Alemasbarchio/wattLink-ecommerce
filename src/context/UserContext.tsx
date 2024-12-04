import React, { createContext, useContext, useState } from "react";

interface UserToken {
    user?: {
       id: string;
       name: string;
       email: string;
       role:string;
       token:string;
    };
    setUser: (user: {
       id: string;
       name: string;
       email: string;
       role:string;
       token: string
    }) => void;
}

const userTokenDefault: UserToken = {
    
    setUser: () => null,
}

const UserGlobals = createContext<UserToken>(userTokenDefault);

interface IProvider {
    children: React.ReactNode;
}

const UserNameProvider = ({ children }: IProvider) => {
    const [user, setUser] = useState<UserToken['user']>();
    
    return (
        <UserGlobals.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserGlobals.Provider>
    );
}

const useTokenContext = () => useContext(UserGlobals);
export { useTokenContext, UserNameProvider };
