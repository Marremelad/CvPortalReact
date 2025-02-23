import "./resume.css";
import image from "../../assets/images/CvPicture.jpg";
import {useScrollToTop} from "../../hooks/useScrollToTop.js";
import Employment from "../../components/resume/Employment.jsx";
import References from "../../components/resume/References.jsx";

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
                        <References />
                    </div>
                </section>
            </div>

            <div className="education-and-languages-container">
                <section className="education">
                    <h2>Education</h2>

                    <div className="cv-information-container">
                        <article>
                            <p className="date">
                                2024.09 - Ongoing
                            </p>

                            <p className="program">
                                .NET Fullstack developer
                            </p>

                            <p className="educational-institution">
                                Chas Academy
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2022.06 - 2022.06
                            </p>

                            <p className="program">
                                Security guard
                            </p>

                            <p className="educational-institution">
                                Securitas AB
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2018.07 - 2019.06
                            </p>

                            <p className="program">
                                Military service, Tank Gunner
                            </p>

                            <p className="educational-institution">
                                Wartofta Kompani, P4,
                                Skaraborgs regemente
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2014.08 - 2017.06
                            </p>

                            <p className="program">
                                Natural Science Program
                            </p>

                            <p className="educational-institution">
                                Jensen Gymnasium Södra
                            </p>
                        </article>
                    </div>
                </section>

                <section className="languages">
                    <h2>Language skills</h2>

                    <div className="cv-information-container">
                        <article>
                            <p className="date">
                                Portuguese
                            </p>

                            <p className="role">
                                Fluent in speech and writing
                            </p>

                        </article>

                        <article>
                            <p className="date">
                                Swedish
                            </p>

                            <p className="role">
                                Fluent in speech and writing
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                English
                            </p>

                            <p className="role">
                                Fluent in speech and writing
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                Spanish
                            </p>

                            <p className="role">
                                Good comprehension. Basic speaking and writing skills
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                French
                            </p>

                            <p className="role">
                                Basic speaking, writing, and comprehension skills
                            </p>
                        </article>
                    </div>
                </section>
            </div>
        </>
    )
}