import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
    return(
        <>
            <Link to={"#sidebar"}>
                <article id="hamburger-menu" className="hamburger-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            </Link>

            <nav id="sidebar" className="sidebar">
                <Link to={"#"} className={"close-sidebar-internal"}>
                    &times;
                </Link>

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

            <Link to={"#"} className={"close-sidebar"}></Link>
        </>
    )
}