// import All from "./All";

import Main from "./pages/Main/Main";
import Skills from "./pages/skills/Skills";
import AboutMe from "./pages/aboutMe/AboutMe";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";

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
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
