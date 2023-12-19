// import All from "./All";

import Main from "./pages/Main/Main";
import Skills from "./pages/skills/Skills";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/skills" element={<Skills />} /> */}
            {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
          </Routes>
        </div>
      </Router>
      <Skills/>
    </div>
  );
};

export default App;
