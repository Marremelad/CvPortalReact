import "./contact.css"
import { useEffect } from "react"

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <img className="coat-of-arms" src="../../../public/images/MauricioCoatOfArmsTextTop.png" alt="" />

            <div className="title-container">
                <h1 className="contact-title-text">
                    If you’re interested in collaborating or exchanging ideas, feel free to reach out.
                </h1>
            </div>

            <section className="contact-contact-icons">
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
        </>
    )
}