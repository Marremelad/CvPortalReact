import {useState} from "react";
import data from "../../assets/json/techStack.json";
import ModalPopup from "../../components/modalPopups/ModalPopup.jsx";
import "./home.css";
import parse from "html-react-parser";

export default function Home() {
    const [removeTechStackButton, setRemoveTechStackButton] = useState(false)
    const [open, setOpen] = useState(false);

    return (
        <>
            <figure>
                <img className="coat-of-arms" src="images/MauricioCoatOfArmsTextTop.png" alt=""/>
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
                <article onClick={() => setOpen(true)}>
                    {parse(data[0].html)}
                </article>

                <ModalPopup data={data} open={open} setOpen={setOpen}/>
            </section>
        </>
    )
}