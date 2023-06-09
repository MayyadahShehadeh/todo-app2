import React from "react";


export const SettingsContext = React.createContext(); //used by the consumer


export default function SettingsProvider(props) {
    
    const state = {
        completedItem: false,
        numberOfItems: 4,
        // sortField: 'difficulty'
    }
    
    return(
        <SettingsContext.Provider value={state} >
            {props.children}
        </SettingsContext.Provider>
    )
}