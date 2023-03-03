import { createContext, useContext, useEffect, useState } from "react";

export const ActiveContext = createContext()


export const ActiveContextProvider = ({children})=>{
    const [activeComponent, activate] = useState(null)

    return(
        <ActiveContext.Provider value={{activeComponent, activate}}>
            {children}
        </ActiveContext.Provider>
    )
} 