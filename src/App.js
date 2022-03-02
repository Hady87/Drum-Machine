
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DrumProvider } from "./context/DrumContext";
import "./App.css";


import MainCompoment from "./components/MainCompoment";
//import DrumMachine from "./components/DrumMachine";

function App() {
  return (
    <>
    <DrumProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
               
                <MainCompoment/>
               
                
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </DrumProvider>
    </>
  );
}

export default App;
