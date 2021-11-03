import React, {createContext, useContext, useMemo, useState} from "react";

const WorkerContext = createContext();

export function WorkerProvider(props) {
    const [workerAmount, setWorkerAmount] = useState(0);
    const [workerEfficiency, setWorkerEfficiency] = useState(1);

    const api = useMemo(() => ({
        workerAmount, setWorkerAmount, workerEfficiency, setWorkerEfficiency
    }), [
        workerAmount, setWorkerAmount, workerEfficiency, setWorkerEfficiency
    ]);

    return <WorkerContext.Provider value={api}>
        {props.children}
    </WorkerContext.Provider>
}

export const useWorkerContext = () => useContext(WorkerContext);
