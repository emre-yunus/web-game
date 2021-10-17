import {useState} from "react";

export function Button(props) {
    const [bottles, setBottles] = useState(0);
    const [money, setMoney] = useState(0);
    const [productionEfficiency, setProductionEfficiency] = useState(1);

    return <div>
        <h3>bottles: {bottles}</h3>
        <h3>money: €{money}</h3>
        <button onClick={() => setBottles(bottles+productionEfficiency)}>produce {productionEfficiency} bottle of water</button>
        <button onClick={() => {
            setBottles(bottles-bottles);
            setMoney(money+bottles);
        }}>sell all bottles</button>
        <button onClick={() => setProductionEfficiency(productionEfficiency+1)}>increase production efficiency</button>
    </div>
}