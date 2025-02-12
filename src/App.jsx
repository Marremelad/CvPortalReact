import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.css"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Resume from "./pages/Resume.jsx"
import Contact from "./pages/Contact.jsx"

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/projects"} element={<Projects />}/>
                <Route path={"/resume"} element={<Resume />}/>
                <Route path={"/contact"} element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
