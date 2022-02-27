
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { DrumProvider } from "./context/DrumContext";
import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "./components/Button";
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
