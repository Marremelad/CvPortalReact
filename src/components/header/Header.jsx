import {NavLink, Link} from "react-router-dom"
import {useState} from "react";
import Shade from "../shade/Shade.jsx";
import "./header.css"

export default function Header() {
    const [open, setOpen] = useState(false)

    const toggleShade = () => {
        setOpen(open => !open);
    }

    return(
        <>
            <header>
                <article
                    className={"hamburger-menu"}
                    onClick={() => setOpen(!open)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </article>

                <nav id="sidebar" className={`sidebar ${open ? "open-sidebar" : "closed-sidebar"}`}>
                    <article className={"close-sidebar-internal"}
                             onClick={() => setOpen(!open)}
                    >
                        &times;
                    </article>

                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/about"}>About Me</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/projects"}>Projects</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/resume"}>Resumé</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/contact"}>Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>

                <Shade openShade={open} onClick={toggleShade}/>
            </header>
        </>
    )
}