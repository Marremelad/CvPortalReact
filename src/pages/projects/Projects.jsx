import "./projects.css"
import Project from "../../components/project/Project.jsx";

export default function Projects() {

    return (
        <>
            <figure>
                <img className="coat-of-arms" src="../../../public/images/MauricioCoatOfArmsTextTop.png" alt="" />
            </figure>

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