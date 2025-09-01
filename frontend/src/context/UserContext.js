import React, { createContext, useState, useContext } from "react";

export const MyContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <MyContext.Provider value={{ user, setUser }}>
            {children}
        </MyContext.Provider>
        );
};
export default UserProvider;



