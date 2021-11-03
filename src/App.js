import 'normalize.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard} from "./componenten/Dashboard";
import {WorkerProvider} from "./context/workerContext";
import {BottleProvider} from "./context/bottleContext";
import {CapitalProvider} from "./context/capitalContext";

function ProvidedApp() {
    return <div className="App">
        <Dashboard/>
    </div>
}

function App() {
  return (
    <WorkerProvider>
      <BottleProvider>
          <CapitalProvider>
              <ProvidedApp/>
          </CapitalProvider>
      </BottleProvider>
  </WorkerProvider>
  )
}

export default App;
