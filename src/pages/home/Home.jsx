import "./home.css";
import {useState} from "react";
import parse from "html-react-parser";
import data from "../../assets/json/techStack.json";
import ModalPopup from "../../components/modalPopups/ModalPopup.jsx";

export default function Home() {
    const [removeTechStackButton, setRemoveTechStackButton] = useState(false)

    return (
        <>
            <figure>
                <img className="coat-of-arms" src="../../../public/images/MauricioCoatOfArmsTextTop.png" alt="Coat of arms"/>
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

            <section id="tech-stack" className={`tech-stack ${removeTechStackButton ? "open-tech-stack" : ""}`}>
                {data.map((tech, index) => {
                    const [open, setOpen] = useState(false);

                    return (
                        <div key={index}>
                            <article onClick={() => setOpen(true)}>
                                {parse(tech.html)}
                            </article>

                            <ModalPopup data={tech} open={open} setOpen={setOpen} />
                        </div>
                    );
                })}
            </section>
        </>
    )
}