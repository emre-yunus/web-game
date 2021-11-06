import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const InfoContext = createContext();

export function InfoProvider(props) {
    const [errorMessages, setErrorMessages] = useState([]);

    const api = useMemo(() => ({
        errorMessages, setErrorMessages
    }), [
        errorMessages, setErrorMessages
    ]);

    return <InfoContext.Provider value={api}>
        {props.children}
    </InfoContext.Provider>
}

export const useInfoContext = () => useContext(InfoContext);