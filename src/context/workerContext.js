import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const WorkerContext = createContext();

export function WorkerProvider(props) {
    const [workerAmount, setWorkerAmount] = useState(() => {
        const savedWorkerAmount = JSON.parse(localStorage.getItem("workerAmount"));
        return savedWorkerAmount || 0;
    });
    const [workerEfficiency, setWorkerEfficiency] = useState(() => {
        const savedWorkerEfficiency = JSON.parse(localStorage.getItem("workerEfficiency"));
        return savedWorkerEfficiency || 1 ;
    });

    useEffect(() => localStorage.setItem("workerAmount", JSON.stringify(workerAmount)), [workerAmount]);
    useEffect(() => localStorage.setItem("workerEfficiency", JSON.stringify(workerEfficiency)), [workerEfficiency]);

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
