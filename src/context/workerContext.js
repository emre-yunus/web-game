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
    const [workerActive, setWorkerActive] = useState(() => {
        return JSON.parse(localStorage.getItem("workerActive")) || false;
    });

    useEffect(() => localStorage.setItem("workerAmount", JSON.stringify(workerAmount)), [workerAmount]);
    useEffect(() => localStorage.setItem("workerEfficiency", JSON.stringify(workerEfficiency)), [workerEfficiency]);
    useEffect(() => localStorage.setItem("workerActive", JSON.stringify(workerActive)), [workerActive]);

    const api = useMemo(() => ({
        workerAmount, setWorkerAmount, workerEfficiency, setWorkerEfficiency, workerActive, setWorkerActive
    }), [
        workerAmount, setWorkerAmount, workerEfficiency, setWorkerEfficiency, workerActive, setWorkerActive
    ]);

    return <WorkerContext.Provider value={api}>
        {props.children}
    </WorkerContext.Provider>
}

export const useWorkerContext = () => useContext(WorkerContext);
