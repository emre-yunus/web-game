import 'normalize.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard} from "./componenten/Dashboard";
import {WorkerProvider} from "./context/workerContext";
import {BottleProvider} from "./context/bottleContext";
import {CapitalProvider} from "./context/capitalContext";
import {SalesPersonProvider} from "./context/salesPersonContext";

function ProvidedApp() {
    return <div className="App">
        <Dashboard/>
    </div>
}

function App() {
  return (
      <BottleProvider>
          <CapitalProvider>
              <WorkerProvider>
                  <SalesPersonProvider>
                      <ProvidedApp/>
                  </SalesPersonProvider>
              </WorkerProvider>
          </CapitalProvider>
      </BottleProvider>
  )
}

export default App;
