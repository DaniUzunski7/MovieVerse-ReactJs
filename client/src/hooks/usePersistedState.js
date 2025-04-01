import { useState } from "react";

export default function usePersistedState(stateKey, initialState){
    const [state, setState] = useState( () => {
        const persistedStateJSON = localStorage.getItem(stateKey);

        if(!persistedStateJSON){
            return initialState
        }

        const persistedState = JSON.parse(persistedStateJSON);

        return persistedState
    });

    const setPersistedState = (data) => {
        const persistedData = JSON.stringify(data);
        
        localStorage.setItem(stateKey, persistedData);

        setState(data);
    }

    return [
        state, 
        setPersistedState
    ]
}