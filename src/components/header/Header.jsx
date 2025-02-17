import "./header.css"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react";
import Shade from "../shade/Shade.jsx";

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <article
                    className={"hamburger-menu"}
                    onClick={() => setOpen(true)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </article>

                <nav id="sidebar" className={`sidebar ${open ? "open-sidebar" : "closed-sidebar"}`}>
                    <article className={"close-sidebar"}
                        onClick={() => setOpen(false)}
                    >
                        &times;
                    </article>

                    <ul>
                        <li>
                            <NavLink to={"/"} onClick={() => setOpen(false)}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/about"} onClick={() => setOpen(false)}>About Me</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/projects"} onClick={() => setOpen(false)}>Projects</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/resume"} onClick={() => setOpen(false)}>Resumé</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/contact"} onClick={() => setOpen(false)}>Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>

                <Shade openShade={open} onClick={() => setOpen(false)} />
            </header>
        </>
    )
}