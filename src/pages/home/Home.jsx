import {useState} from "react";
import Navbar from "../../components/Navbar.jsx"
import "./home.css"

export default function Home() {
    const [removeTechStackButton, setRemoveTechStackButton] = useState(false)

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <article id="elite-popup" className="elite-popup">
                    <a id="close-elite-popup" href="#" className="close-elite-popup">&times;</a>
                    <h2>WOW!</h2>
                    <p>
                        You entered 1337! You are truly elite.
                    </p>
                </article>

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
                    <article>
                        <a href="#dot-net-popup">
                            <p className="dot-net-icon">.NET</p>
                        </a>
                    </article>

                    <article id="dot-net-popup" className="popup">
                        <a href="#" className="close">&times;</a>
                        <h2>.NET</h2>
                        <p>.NET is a Microsoft framework for building applications using C#, VB.NET, and F#. It provides
                           a large
                           library for web, desktop, and mobile development, simplifying tasks like database access and
                           UI
                           design.
                        </p>
                    </article>
                    <a href="#" className="close-popup"></a>

                    <article>
                        <a href="#html-popup">
                            <i className="fa-brands fa-html5 html5-icon"></i>
                        </a>
                    </article>

                    <article id="html-popup" className="popup">
                        <a href="#" className="close">&times;</a>
                        <h2>HTML5</h2>
                        <p>HTML5 is the latest version of the markup language for structuring web content. It adds new
                           elements
                           for multimedia, improved form controls, and better support for web applications, making
                           websites more
                           interactive and accessible across devices.
                        </p>
                    </article>
                    <a href="#" className="close-popup"></a>

                    <article>
                        <a href="#css-popup">
                            <i className="fa-brands fa-css3-alt css3-icon"></i>
                        </a>
                    </article>

                    <article id="css-popup" className="popup">
                        <a href="#" className="close">&times;</a>
                        <h2>CSS 3</h2>
                        <p>CSS 3 is the latest version of the Cascading Style Sheets language used for styling web
                           pages. It
                           introduces new features like animations, transitions, and flexible box layouts, allowing for
                           more
                           dynamic and responsive designs.
                        </p>
                    </article>
                    <a href="#" className="close-popup"></a>

                    <article>
                        <a href="#java-script-popup">
                            <i className="fa-brands fa-js javascript-icon"></i>
                        </a>
                    </article>

                    <article id="java-script-popup" className="popup">
                        <a href="#" className="close">&times;</a>
                        <h2>Javascript</h2>
                        <p>JavaScript is a versatile programming language that enables dynamic behavior on websites. It
                           allows
                           for interactive elements, real-time updates, and user-driven actions, making web pages more
                           lively
                           and flexible.
                        </p>
                    </article>
                    <a href="#" className="close-popup"></a>
                </section>
            </main>

            <footer>
                <div className="copy-right-symbol">
                    <p>C</p>
                </div>

                <p className="copy-right-text">
                    Created by
                    <a className="footer-linkedin-link" href="https://www.linkedin.com/in/mauricio-corte-343a6a22a/">
                        Mauricio Corte
                    </a>
                </p>
            </footer>
        </>
    )
}