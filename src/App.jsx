import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.css"
// import "./components/modalPopups/modalPopup.css";
import Home from "./pages/home/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Resume from "./pages/Resume.jsx"
import Contact from "./pages/Contact.jsx"
import Header from "./components/header/Header.jsx";
import ElitePopup from "./components/modalPopups/elitePopup/ElitePopup.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {

  return (
    <>
        <BrowserRouter>
            <Header />
            <main>
                <ElitePopup />
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/about"} element={<About />}/>
                    <Route path={"/projects"} element={<Projects />}/>
                    <Route path={"/resume"} element={<Resume />}/>
                    <Route path={"/contact"} element={<Contact />}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </>
  )
}