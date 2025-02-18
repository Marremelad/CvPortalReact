import "./style.css"
import image from "/src/assets/images/MauricioCoatOfArmsTextTop.png"
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Projects from "./pages/projects/Projects.jsx"
import Resume from "./pages/resume/Resume.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Header from "./components/header/Header.jsx";
import ElitePopup from "./components/modalPopups/elitePopup/ElitePopup.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {

  return (
    <>
        <HashRouter>
            <Header />
            <main>
                <figure>
                    <img className="coat-of-arms" src={`${image}`} alt="Coat of arms" />
                </figure>
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
        </HashRouter>
    </>
  )
}