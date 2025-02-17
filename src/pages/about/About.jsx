import "./about.css"
import { useState, useEffect } from "react";

export default function About() {
    const [removeElements, setRemoveElements] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <figure>
                <img className="coat-of-arms" src="../../../public/images/MauricioCoatOfArmsTextTop.png" alt="" />
            </figure>

            <div className="title-container">
                <h1 className="title-text">"Discipline will always beat Motivation"</h1>
            </div>

            <div className="down-arrow">
                <p>&#8595;</p>
            </div>

            <section className="about-information-container">
                <article>
                    <p>
                        I am Mauricio Corte, a software developer with a background in leadership, problem-solving, and
                        strategic thinking. Born in Brazil and raised in Sweden, I’ve always valued structure,
                        efficiency,
                        and the ability to create lasting impressions. These principles guide me in how I approach
                        challenges in all aspects of life.
                    </p>
                </article>

                <figure>
                    <img src="../../../public/images/MilitaryExercise1.jpg" alt="Mauricio standing on a field holding an AK5." />
                </figure>

                <article>
                    <p>
                        Before I entered the world of software development, I spent roughly four years in the military.
                        During that time, I learned the value of discipline, leadership, and adaptability—qualities that
                        have shaped my approach to coding and problem-solving. Discipline is the foundation of success,
                        and
                        I apply that mindset to everything I do.
                    </p>
                </article>

                <figure>
                    <img src="../../../public/images/HorseRide.jpg" alt="Mauricio riding a horse." />
                </figure>

                <article>
                    <p>
                        The medieval theme of this site is a reflection of my interest in heraldry, a tradition that
                        merges
                        history, symbolism, and identity. Just as heraldic designs once represented strength and
                        purpose, I
                        believe good software should be built with the same clarity and intention.
                    </p>
                </article>

                <figure>
                    <img src="../../../public/images/SwedishCoatOfArms.jpg" alt="Swedish coat of arms.       " />
                </figure>

                <article>
                    <p>
                        Beyond coding, I have a deep respect for animals—especially horses—and a passion for
                        competition,
                        strategy, and honest discussions. I value directness, precision, and work that makes a
                        significant
                        impact.
                    </p>
                </article>

                <figure>
                    <img className="tank-round-image" src="../../../public/images/MilitaryExercise2.jpg" alt="Mauricio holding a tank round." />
                </figure>

                <article>
                    <div className="contact-me-article-content">
                        <p className={removeElements ? "remove-element" : ""}>
                            If you’re interested in collaborating or exchanging ideas, feel free to reach out.
                        </p>

                        <div className={`contact-me-button ${removeElements ? "remove-element" : ""} `} onClick={() => setRemoveElements(true)}>
                            Contact Me
                        </div>

                        <section className={`contact-icons ${removeElements ? "show-contact-icons" : "hide-contact-icons"}`}>
                            <article>
                                <a href="https://www.linkedin.com/in/mauricio-corte-343a6a22a/">
                                    <i className="fa-brands fa-linkedin linkedin-icon"></i>
                                </a>
                            </article>

                            <article>
                                <a href="https://github.com/Marremelad">
                                    <i className="fa-brands fa-github github-icon"></i>
                                </a>
                            </article>

                            <article>
                                <a href="mailto:corte.mauricio98@gmail.com">
                                    <i className="fa-regular fa-envelope mail-icon"></i>
                                </a>
                            </article>
                        </section>
                    </div>
                </article>
            </section>
        </>
    )
}