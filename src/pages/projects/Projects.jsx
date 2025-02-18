import "./projects.css"
import {useScrollToTop} from "../../hooks/useScrollToTop.js";
import Project from "../../components/project/Project.jsx";

export default function Projects() {
    useScrollToTop()

    return (
        <>
            <div className="title-container">
                <h1 className="title-text">My<br />projects</h1>
            </div>

            <div className="down-arrow">
                <p>&#8595;</p>
            </div>

            <section className="projects-container">
                <Project />
            </section>
        </>
    )
}