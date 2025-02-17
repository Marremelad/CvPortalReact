import "./project.css"
import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import ModalPopup from "../modalPopups/ModalPopup.jsx";

export default function Project() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [openStates, setOpenStates] = useState(data.map(() => false));

    useEffect(() => {
        fetch("https://api.github.com/users/Marremelad/repos")
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    { setData(data); console.log(data) }
                    setLoading(false)
                }, 1000)
            })
            .catch(error => console.log(`Something went wrong!: ${error}`))
    }, []);

    if (loading) {
        return (
            <>
                <article className="project">
                    <ClimbingBoxLoader
                        color="#efefef"
                        size={30}
                    />
                </article>
            </>
        )
    }

    const toggleOpen = (index) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <>
            {data.map((project, index) => (
                <article className="project" key={project.name}>
                    <div className="project-info-container">
                        <h2 className="project-name">{project.name}</h2>
                        <section className="project-button-container">
                            <div className="learn-more-button" onClick={() => toggleOpen(index)}>
                                learn more
                            </div>

                            <a href="https://github.com/Marremelad/SalamanderBank">
                                <i className="fa-brands fa-github projects-github-icon"></i>
                            </a>

                            <ModalPopup
                                data={{
                                    name: project.name,
                                    description: project.description ?
                                        project.description : "This project does not have a description. Visit the repository to learn more."
                                }}
                                open={openStates[index]}
                                setOpen={() => toggleOpen(index)}
                            />
                        </section>
                    </div>
                </article>
            ))}
        </>
    );

}