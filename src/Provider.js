import React, { createContext, useState } from "react";

export const Context = createContext();

export default function Provider ({ children }) {

    const [test, setTest] = useState('Teste de Context API');
    const [count, setCount] = useState(0)

    return(
        <Context.Provider value={{test, setTest, count, setCount}}>
            {children}
        </Context.Provider>
    )

}