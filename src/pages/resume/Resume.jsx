import "./resume.css";
import image from "../../assets/images/CvPicture.jpg";
import {useScrollToTop} from "../../hooks/useScrollToTop.js";
import Employment from "../../components/resume/Employment.jsx";
import Reference from "../../components/resume/Reference.jsx";
import Education from "../../components/resume/Education.jsx";
import Language from "../../components/resume/Language.jsx";

export default function Resume() {
    useScrollToTop();

    return (
        <>
            <div className="title-container">
                <h1 className="title-text">Browse<br />Resumé</h1>
            </div>

            <div className="down-arrow">
                <p>&#8595;</p>
            </div>

            <section className="personal-information-container">
                <figure className="cv-picture-container">
                    <img className="cv-picture" src={`${image}`} alt="Portrait picture" />
                </figure>

                <article className="personal-information">
                    <p>Name: Mauricio Corte</p>
                    <p>Location: Stockholm, Sweden</p>
                    <p>E-mail: corte.mauricio98@gmail.com</p>
                </article>
            </section>

            <div className="employment-and-assignments-and-references-container">
                <section className="employment-and-assignments">
                    <h2>Employment<br />and<br />Assignments</h2>

                    <div className="cv-information-container">
                        <Employment />
                    </div>
                </section>

                <section className="references">
                    <h2>References</h2>

                    <div className="cv-information-container">
                        <Reference />
                    </div>
                </section>
            </div>

            <div className="education-and-languages-container">
                <section className="education">
                    <h2>Education</h2>

                    <div className="cv-information-container">
                        <Education />
                    </div>
                </section>

                <section className="languages">
                    <h2>Language skills</h2>

                    <div className="cv-information-container">
                        <Language />
                    </div>
                </section>
            </div>
        </>
    )
}