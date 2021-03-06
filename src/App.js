import 'normalize.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services/firestore"
import {Dashboard} from "./componenten/Dashboard";
import {WorkerProvider} from "./context/workerContext";
import {BottleProvider} from "./context/bottleContext";
import {CapitalProvider} from "./context/capitalContext";
import {SalesPersonProvider} from "./context/salesPersonContext";
import {ProductionManagerProvider} from "./context/productionManagerContext";
import {SalesManagerProvider} from "./context/salesManagerContext";
import {ManagerHiringProvider} from "./context/managerHiringContext";
import {LeaderBoardAccordion} from "./componenten/LeaderBoardAccordion";
import {InfoProvider} from "./context/infoContext";
import {CurrencyProvider} from "./context/currencyContext";

function ProvidedApp() {
    return <div className="App">
        <LeaderBoardAccordion/>
        <Dashboard/>
    </div>
}

function App() {
  return (
      <BottleProvider>
          <CapitalProvider>
              <WorkerProvider>
                  <SalesPersonProvider>
                      <ProductionManagerProvider>
                          <SalesManagerProvider>
                              <ManagerHiringProvider>
                                  <InfoProvider>
                                      <CurrencyProvider>
                                          <ProvidedApp/>
                                      </CurrencyProvider>
                                  </InfoProvider>
                              </ManagerHiringProvider>
                          </SalesManagerProvider>
                      </ProductionManagerProvider>
                  </SalesPersonProvider>
              </WorkerProvider>
          </CapitalProvider>
      </BottleProvider>
  )
}

export default App;
