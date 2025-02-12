import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
    return(
        <>
            <a href="#sidebar">
                <article id="hamburger-menu" className="hamburger-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            </a>

            <nav id="sidebar" className="sidebar">
                <a href="#" className="close-sidebar-internal">
                    &times;
                </a>

                <ul>
                    <li>
                        <a className="active" href="index.html">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="html/about.html">
                            About Me
                        </a>
                    </li>

                    <li>
                        <a href="html/projects.html">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="html/resume.html">
                            Resumé
                        </a>
                    </li>

                    <li>
                        <a href="html/contact.html">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <a href="#" className="close-sidebar"></a>
        </>
    )
}