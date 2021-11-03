import React, {createContext, useContext, useMemo, useState} from "react";

const WorkerContext = createContext();

export function WorkerProvider(props) {
    const [workerAmount, setWorkerAmount] = useState(0);
    console.log({workerAmount});

    const api = useMemo(() => ({
        workerAmount, setWorkerAmount
    }), [
        workerAmount, setWorkerAmount
    ]);

    return <WorkerContext.Provider value={api}>
        {props.children}
    </WorkerContext.Provider>
}

export const useWorkerContext = () => useContext(WorkerContext);
