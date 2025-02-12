import {NavLink, Link} from "react-router-dom"
import {useState} from "react";
export default function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false)

    return(
        <>
            <article
                className={"hamburger-menu"}
                onClick={() => setOpenSidebar(!openSidebar)}
            >
                <div></div>
                <div></div>
                <div></div>
            </article>

            <nav id="sidebar" className={`sidebar ${openSidebar ? "open-sidebar" : "closed-sidebar"}`}>
                <article className={"close-sidebar-internal"}
                         onClick={() => setOpenSidebar(!openSidebar)}
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
                        <NavLink to={"/resume"}>Browse Resumé</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/contact"}>Contact Me</NavLink>
                    </li>
                </ul>
            </nav>

            {openSidebar && (
                <article className={"closed-sidebar"}></article>
            )}
        </>
    )
}