import {useState} from "react";
import "./footer.css"
export default function Footer() {
    const body = document.querySelector("body");
    const [theBestTeam, setTheBeastTeam] = useState(false)

    const toggleClass = (theBestTeam) => {
        if (theBestTeam) {
            body.classList.add("the-best-team-in-the-world")
        }
        else {
            body.classList.remove("the-best-team-in-the-world")
        }
    }

    return (
        <>
            <footer>
                <div className="copy-right-symbol" onClick={() => {
                    setTheBeastTeam(theBestTeam => !theBestTeam);
                    toggleClass(theBestTeam)
                }}>
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