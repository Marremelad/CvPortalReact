import "./home.css";
import { useState } from "react";
import {useScrollToTop} from "../../hooks/useScrollToTop.js";
import parse from "html-react-parser";
import data from "../../assets/json/techStack.json";
import ModalPopup from "../../components/modalPopups/ModalPopup.jsx";

export default function Home() {
    const [removeTechStackButton, setRemoveTechStackButton] = useState(false)
    const [openStates, setOpenStates] = useState(data.map(() => false))

    useScrollToTop()

    const toggleOpen = (index) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates]
            newStates[index] = !newStates[index]
            return newStates
        })
    }

    return (
        <>
            <figure>
                <img className="coat-of-arms" src={`${process.env.PUBLIC_URL}/images/MauricioCoatOfArmsTextTop.png`} alt="Coat of arms" />
            </figure>

            <div className="title-container">
                <h1 className="title-text">Software Development student based in Stockholm, Sweden</h1>
            </div>

            <div
                className="tech-stack-button-container"
                onClick={() => setRemoveTechStackButton(!removeTechStackButton)}
            >
                <div className={`tech-stack-button ${removeTechStackButton ? "remove-tech-stack-button" : ""}`}>
                    Tech Stack
                </div>
            </div>

            <section className={`tech-stack ${removeTechStackButton ? "open-tech-stack" : ""}`}>
                {data.map((tech, index) => {
                    return (
                        <div key={index}>
                            <article onClick={() => toggleOpen(index)}>
                                {parse(tech.html)}
                            </article>

                            <ModalPopup
                                data={tech}
                                open={openStates[index]}
                                setOpen={() => toggleOpen(index)}
                            />
                        </div>
                    );
                })}
            </section>
        </>
    )
}